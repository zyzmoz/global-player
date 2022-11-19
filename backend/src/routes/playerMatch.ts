import { Router } from 'express'
import { ObjectId } from 'mongodb'
import { IPlayerMatch, isPlayerMatch } from '../models/PlayerMatches'
import { findMany, insert, remove, update } from '../shared/dbFunctions'
import RedisClient from '../shared/redis'

const router = Router()

router.get('/:playerId', async (req, res) => {
  const { playerId } = req.params
  const redisClient = RedisClient.getInstance()

  const cachedData = await redisClient.get(`playerMatches:${playerId}`)
  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData))
  } else {
    const matches = await findMany<IPlayerMatch>('playerMatches', {
      playerId: new ObjectId(playerId),
      assists: { $gte: 0 },
    })

    await redisClient.set(`playerMatches:${playerId}`, JSON.stringify(matches))
    res.json(matches)
  }
})

router.post('/', async (req, res) => {
  const data: IPlayerMatch = req.body
  if (!isPlayerMatch(data)) {
    res.status(500).end()
    return
  }

  const match = await insert<IPlayerMatch>('playerMatches', data)

  res.json(match)
})

router.put('/', async (req, res) => {
  const data: IPlayerMatch = req.body

  if (!isPlayerMatch(data)) {
    res.status(500).end()
    return
  }

  const match = await update<IPlayerMatch>('playerMatches', data)

  res.json(match)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  if (!id || id === 'null') {
    res.status(400).end()
    return
  }
  await remove<IPlayerMatch>('playerMatches', id)

  res.status(204).end()
})

export default router
