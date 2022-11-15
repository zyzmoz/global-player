import { Router } from 'express'
import userRouter from './user'
import playerRouter from './player'
import planRouter from './plan'
import playerMatchRouter from './playerMatch'
import reviewRouter from './review'
import licenseRouter from './license'
import analyticsRouter from './analytics'
import { seedPlayers } from '../integrations/RiotAPI'
import { authMiddleware } from '../middlewares/authMiddleware'
import jwt from 'jsonwebtoken'

const router = Router()

const APP_SECRET = process.env.APP_SECRET || 'banana'

router.use((req: any, _res, next) => {
  const { headers } = req

  if (headers && headers.authorization && headers.authorization.split(' ')[0] === 'Bearer') {
    jwt.verify(headers.authorization.split(' ')[1], APP_SECRET, (err, decode) => {
      if (err) {
        req.authorization = null
      }

      req.authorization = decode
      next()
    })
  } else {
    req.authorization = null
    next()
  }
})

// Root
router.get('/', (_req, res) => {
  res.send('Hello World')
})

router.post('/seed', (req, res) => {
  const { password } = req.body
  if (password === process.env.SEED_PASSWORD) {
    // Run Seed Function
    seedPlayers()

    res.status(200).end()
  }

  res.status(401).end()
})

router.use('/user', authMiddleware, userRouter)
router.use('/player', authMiddleware, playerRouter)
router.use('/plan', authMiddleware, planRouter)
router.use('/playerMatch', authMiddleware, playerMatchRouter)
router.use('/review', authMiddleware, reviewRouter)
router.use('/license', authMiddleware, licenseRouter)
router.use('/analytics', authMiddleware, analyticsRouter)

export { router }
