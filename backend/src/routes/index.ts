import { Router } from 'express'
import userRouter from './user'
import playerRouter from './player'
import planRouter from './plan'
import playerMatchRouter from './playerMatch'
import reviewRouter from './review'
import licenseRouter from './license'

const router = Router()

// Root
router.get('/', (_req, res) => {
  res.send('Hello World')
})

router.post('/seed', async (req, res) => {
  const { password } = req.body
  if (password === process.env.SEED_PASSWORD) {
    // Run Seed Function
    res.status(200).json({}).end()
  }

  res.status(401).end()
})

router.use('/user', userRouter)
router.use('/player', playerRouter)
router.use('/plan', planRouter)
router.use('/playerMatch', playerMatchRouter)
router.use('/review', reviewRouter)
router.use('/license', licenseRouter)

export { router }
