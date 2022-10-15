import { Router } from 'express'
import { ILicense, isLicense } from './models/License'
import { IReview, isReview } from './models/Review'
import { IPlayer, isPlayer } from './models/Player'
import { isUser, IUser } from './models/User'
import { findOne, insert, findMany, update, remove } from './shared/dbFunctions'

const router = Router()

// Root
router.get('/', (_req, res) => {
  res.send('Hello World')
})

// Player Routes
router.get('/player', async (_req, res) => {
  const players = await findMany<IPlayer>('players')
  res.json(players)
})

router.get(`/player/:id`, async (req, res) => {
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
  await remove<IPlayer>('players', id)

  res.status(204).end()
})
// End player routes

// License Routes
router.get('/license', async (_req, res) => {
  const licenses = await findMany<ILicense>('licenses')
  res.json(licenses)
})

router.get(`/license/:id`, async (req, res) => {
  const { id } = req.params
  const license = await findOne<ILicense>('licenses', id)

  res.json(license)
})

router.post('/license', async (req, res) => {
  const data: ILicense = req.body

  if (!isLicense(data)) {
    res.status(500).end()
  }

  const license = await insert<ILicense>('license', data)

  res.json(license)
})

router.put(`/license`, async (req, res) => {
  const data = req.body

  if (!isLicense(data)) {
    res.status(500).end()
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




// User Routes
router.get('/user', async (_req, res) => {
  const users = await findMany<IUser>('users')
  res.json(users)
})

router.get(`/user/:id`, async (req, res) => {
  const { id } = req.params
  const user = await findOne<IUser>('users', id)

  res.json(user)
})

router.post('/user', async (req, res) => {
  const data: IUser = req.body

  if (!isUser(data)) {
    res.status(500).end()
  }

  const user = await insert<IUser>('user', data)

  res.json(user)
})

router.put(`/user`, async (req, res) => {
  const data = req.body

  if (!isUser(data)) {
    res.status(500).end()
  }

  const user = await update<IUser>('users', data)

  res.json(user)
})

router.delete('/user/:id', async (req, res) => {
  const { id } = req.params
  await remove<IUser>('users', id)

  res.status(204).end()
})
// End user routes

export { router }
