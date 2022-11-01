import { Router } from 'express'
import userRouter from './user'
import playerRouter from './player'
import planRouter from './plan'
import playerMatchRouter from './playerMatch'
import reviewRouter from './review'
import licenseRouter from './license'
import { getMatchesDetails, getMatchIds, getPlayers, getPuuidAndProfileIcon } from '../integrations/RiotAPI'
import { insert, insertMany } from '../shared/dbFunctions'
import { IPlayer } from '../models/Player'

const router = Router()

// Root
router.get('/', (_req, res) => {
  res.send('Hello World')
})

router.post('/seed', async (req, res) => {
  const { password } = req.body
  if (password === process.env.SEED_PASSWORD) {
    // Run Seed Function
    const players = await getPlayers()
    await insertMany<IPlayer>('players', players)
    const player = await getPuuidAndProfileIcon(players[0])
    const matchIds = await getMatchIds(player.puuid)
    const matchDetails = await getMatchesDetails(matchIds![0], player.puuid)
    const playerMatch = await insert('playerMatches', { ...matchDetails, playerId: player._id })

    res.status(200).json(playerMatch).end()
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
