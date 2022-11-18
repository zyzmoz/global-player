import { Router } from 'express'
import { ObjectId } from 'mongodb'

import { IFavorite, isFavorite } from '../models/Favorite'
import { findMany, insert, remove } from '../shared/dbFunctions'
import { getPlayerAnalysis } from '../shared/utils'

const router = Router()

router.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const favoritePlayerIds = (await findMany<IFavorite>('favoritePlayers', { userId })).map((f) => f.playerId)

  const players = await findMany('players', { _id: { $in: favoritePlayerIds } })
  const pr = players.map(async (p) => await getPlayerAnalysis(p))
  const favorites = await Promise.all(pr)
  res.json(favorites)
})

router.post('/', async (req, res) => {
  let data = req.body
  if (!isFavorite(data)) {
    res.status(400).end()
    return
  }

  data.playerId = new ObjectId(data.playerId)

  await insert<IFavorite>('favoritePlayers', data)
  res.status(200).end()
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  if (!id || id === 'null') {
    res.status(400).end()
    return
  }
  await remove<IFavorite>('favoritePlayers', id)

  res.status(204).end()
})

export default router
