import { Router } from 'express'
import { ObjectId } from 'mongodb'

import { IFavorite, isFavorite } from '../models/Favorite'
import { findMany, findOne, insert, remove } from '../shared/dbFunctions'
import { getPlayerAnalysis } from '../shared/utils'
import RedisClient from '../shared/redis'

const router = Router()

router.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const redisClient = RedisClient.getInstance()

  const cachedData = await redisClient.get(`favorite:${userId}`)
  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData))
  } else {
    const favoritePlayers = await findMany<IFavorite>('favoritePlayers', { userId })
    const favoritePlayerIds = favoritePlayers.map((f) => f.playerId)

    const players = await findMany('players', { _id: { $in: favoritePlayerIds } })
    const pr = players.map(async (p) => await getPlayerAnalysis(p))
    const favorites = await Promise.all(pr)

    const favs = favorites.map((player: any) => {
      // 1. find the fav id
      // @ts-ignore
      const res = favoritePlayers.filter((f) => f.playerId !== player.id)

      // 2. return the data containing fav id
      // @ts-ignore
      return { ...player, favoriteId: res[0]._id }
    })

    await redisClient.set(`favorite:${userId}`, JSON.stringify(favs))

    res.json(favs)
  }
})

router.post('/', async (req, res) => {
  let data = req.body
  if (!isFavorite(data)) {
    res.status(400).end()
    return
  }

  data.playerId = new ObjectId(data.playerId)
  const redisClient = RedisClient.getInstance()
  await redisClient.del(`favorite:${data.userId}`)

  await insert<IFavorite>('favoritePlayers', data)
  res.status(200).end()
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  if (!id || id === 'null') {
    res.status(400).end()
    return
  }

  const favorite = await findOne('favoritePlayers', id)
  const redisClient = RedisClient.getInstance()
  await redisClient.del(`favorite:${favorite.userId}`)

  await remove<IFavorite>('favoritePlayers', id)

  res.status(204).end()
})

export default router
