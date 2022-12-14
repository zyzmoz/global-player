import { Router } from 'express'
import { IUser } from '../models/User'
import { findMany, findOne, insert, update } from '../shared/dbFunctions'
import sha1 from 'sha1'
import jwt from 'jsonwebtoken'

const APP_SECRET = process.env.APP_SECRET || 'banana'

const router = Router()

// login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(401).json({ messge: `Authentication failed` })
    return
  }

  const hashPassword = sha1(password)

  const user = await findMany<IUser>('users', { email, password: hashPassword })

  if (!user || user.length === 0) {
    res.status(401).json({ messge: `Authentication failed` })
    return
  }

  res.json({ token: jwt.sign({ email, userId: user[0]._id }, APP_SECRET) })
})

// create account
router.post('/create-account', async (req, res) => {
  const { planId, ...data } = req.body
  const userData = data

  const hashPassword = sha1(userData.password)
  
  if (!data) {
    res.status(500).end()
  }

  const user = await insert<IUser>('users', { ...userData, password: hashPassword })

  /**_id: string
  ownerId: string
  userLimit: number
  price: number
  planId: string */

  await insert('licenses', {
    ownerId: user._id,
    planId
  })

  res.json({ token: jwt.sign({ email: user.email, userId: user._id }, APP_SECRET) })
})

// logout
router.patch('/logout', (_, res) => {
  res.clearCookie('user')
  res.clearCookie('sessionId')
  res.status(200).end()
})

// change password
router.put('/change-password', async (req, res) => {
  const { id, password } = req.body
  if (!id || !password) {
    res.status(400).end()
    return
  }

  const hashPassword = sha1(password)

  const user = await findOne<IUser>('users', id)

  if (!user) {
    res.status(400).end()
    return
  }

  await update('users', { ...user, password: hashPassword })

  res.status(202).end()
})

export default router
