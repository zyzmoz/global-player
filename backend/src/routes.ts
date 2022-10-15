import { Router } from 'express'
import { ILicense, isLicense } from './models/License'
import { IPlayer, isPlayer } from './models/Player'
import { IReview, isReview } from './models/Review'
import { findOne, insert, findMany, update, remove } from './shared/dbFunctions'

const router = Router()

// Root
router.get('/', (_req, res) => {
  res.send('Hello World')
})

// PLAYER START

router.get('/player', async (_req, res) => {
  // res.send('This is a test')

  const players = await findMany<IPlayer>('players')
  res.json(players)
})

router.get('/player/:id', async (req, res) => {
  // res.send('This is a test')
  const { id } = req.params
  const player = await findOne<IPlayer>('players', id)

  res.json(player)
})

router.post('/player', async (req, res) => {
  const data: IPlayer = req.body
  
  if (!isPlayer(data)) {
    res.status(500).end()
    return
  }

  const player = await insert<IPlayer>('players', data)

  res.json(player)
})

router.put('/player', async (req, res) => {
  const data:IPlayer = req.body

  if(!isPlayer(data)) {
    res.status(500).end()
    return
  }

  const player = await update<IPlayer>('players', data)

  res.json(player)
})

router.delete('/player/:id', async (req, res) => {
  const { id } = req.params
  await remove <IPlayer>('players', id)

  res.status(204).end()
})

// LICENSE START

router.get('/license', async (_req, res) => {
  // res.send('This is a test')

  const licenses = await findMany<ILicense>('licenses')
  res.json(licenses)
})

router.get('/license/:id', async (req, res) => {
  // res.send('This is a test')
  const { id } = req.params
  const license = await findOne<ILicense>('licenses', id)

  res.json(license)
})

router.post('/license', async (req, res) => {
  const data: ILicense = req.body
  
  if (!isLicense(data)) {
    res.status(500).end()
    return
  }

  const license = await insert<ILicense>('licenses', data)

  res.json(license)
})

router.put('/license', async (req, res) => {
  const data:ILicense = req.body

  if(!isLicense(data)) {
    res.status(500).end()
    return
  }

  const license = await update<ILicense>('licenses', data)

  res.json(license)
})

router.delete('/license/:id', async (req, res) => {
  const { id } = req.params
  await remove <ILicense>('licenses', id)

  res.status(204).end()
})

// REVIEW START

router.get('/review', async (_req, res) => {
  // res.send('This is a test')

  const reviews = await findMany<IReview>('reviews')
  res.json(reviews)
})

router.get('/review/:id', async (req, res) => {
  // res.send('This is a test')
  const { id } = req.params
  const review = await findOne<IReview>('reviews', id)

  res.json(review)
})

router.post('/review', async (req, res) => {
  const data: IReview = req.body
  
  if (!isReview(data)) {
    res.status(500).end()
    return
  }

  const review = await insert<IReview>('reviews', data)

  res.json(review)
})

router.put('/review', async (req, res) => {
  const data:IReview = req.body

  if(!isReview(data)) {
    res.status(500).end()
    return
  }

  const review = await update<IReview>('reviews', data)

  res.json(review)
})

router.delete('/review/:id', async (req, res) => {
  const { id } = req.params
  await remove <IReview>('reviews', id)

  res.status(204).end()
})

export {
  router
}