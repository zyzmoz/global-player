import { Router } from 'express'

import { IReview, isReview } from '../models/Review'

import { findMany, findOne, insert, remove, update } from '../shared/dbFunctions'

const router = Router()

router.get('/', async (_req, res) => {
  const reviews = await findMany<IReview>('reviews')
  res.json(reviews)
})

router.get('/:id', async (req, res) => {
  // res.send('This is a test')
  const { id } = req.params
  const review = await findOne<IReview>('reviews', id)

  res.json(review)
})

router.post('/', async (req, res) => {
  const data: IReview = req.body

  if (!isReview(data)) {
    res.status(500).end()
    return
  }

  const review = await insert<IReview>('reviews', data)

  res.json(review)
})

router.put('/', async (req, res) => {
  const data: IReview = req.body

  if (!isReview(data)) {
    res.status(500).end()
    return
  }

  const review = await update<IReview>('reviews', data)

  res.json(review)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await remove<IReview>('reviews', id)

  res.status(204).end()
})

export default router
