import { Router } from 'express'

import { IReview, isReview } from '../models/Review'

import { findMany, insert, remove, update } from '../shared/dbFunctions'
import { getPlayerReviews } from '../shared/utils'
import RedisClient from '../shared/redis'

const router = Router()

router.get('/:playerId', async (req, res) => {
  const { playerId } = req.params
  const redisClient = RedisClient.getInstance()

  const cachedData = await redisClient.get(`review:${playerId}`)
  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData))
  } else {
    if (!playerId || playerId === 'null') {
      res.status(400).end()
      return
    }
    const review = await findMany<IReview>('reviews', { playerId })

    const finalReview = getPlayerReviews(review)
    await redisClient.set(`review:${playerId}`, JSON.stringify(finalReview))
    res.json(finalReview)
  }
})

router.post('/', async (req, res) => {
  const data: IReview = req.body

  if (!isReview(data)) {
    res.status(500).end()
    return
  }

  const redisClient = RedisClient.getInstance()
  await redisClient.del(`review:${data.playerId}`)

  const review = await insert<IReview>('reviews', data)

  res.json(review)
})

router.put('/', async (req, res) => {
  const data: IReview = req.body

  if (!isReview(data)) {
    res.status(500).end()
    return
  }

  const redisClient = RedisClient.getInstance()
  await redisClient.del(`review:${data.playerId}`)

  const review = await update<IReview>('reviews', data)

  res.json(review)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  if (!id || id === 'null') {
    res.status(400).end()
    return
  }

  await remove<IReview>('reviews', id)

  res.status(204).end()
})

export default router
