import { Router } from 'express'
import userRouter from './user'
import playerRouter from './player'
import planRouter from './plan'
import playerMatchRouter from './playerMatch'
import reviewRouter from './review'
import licenseRouter from './license'
import { seedPlayers } from '../integrations/RiotAPI'

const router = Router()

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

router.use('/user', userRouter)
router.use('/player', playerRouter)
router.use('/plan', planRouter)
router.use('/playerMatch', playerMatchRouter)
router.use('/review', reviewRouter)
router.use('/license', licenseRouter)

export { router }
