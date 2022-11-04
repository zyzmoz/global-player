import { Router } from 'express'

import { isUser, IUser } from '../models/User'

import { findMany, findOne, insert, remove, update } from '../shared/dbFunctions'

const router = Router()

router.get('/', async (_req, res) => {
  const users = await findMany<IUser>('users')
  res.json(users)
})

router.get(`/:id`, async (req, res) => {
  const { id } = req.params
  const user = await findOne<IUser>('users', id)

  res.json(user)
})

router.post('/', async (req, res) => {
  const data: IUser = req.body

  if (!isUser(data)) {
    res.status(500).end()
  }

  const user = await insert<IUser>('user', data)

  res.json(user)
})

router.put(`/`, async (req, res) => {
  const data = req.body

  if (!isUser(data)) {
    res.status(500).end()
  }

  const user = await update<IUser>('users', data)

  res.json(user)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await remove<IUser>('users', id)

  res.status(204).end()
})

export default router
