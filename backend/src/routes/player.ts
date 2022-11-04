import { Router } from 'express'

import { IPlayer, isPlayer } from '../models/Player'
import { findMany, findOne, insert, remove, update } from '../shared/dbFunctions'

const router = Router()

// Player Routes
router.get('/', async (_req, res) => {
  const players = await findMany<IPlayer>('players')
  res.json(players)
})

router.get(`/:id`, async (req, res) => {
  const { id } = req.params
  const player = await findOne<IPlayer>('players', id)

  res.json(player)
})

router.post('/', async (req, res) => {
  const data: IPlayer = req.body
  if (!isPlayer(data)) {
    res.status(500).end()
    return
  }

  const player = await insert<IPlayer>('players', data)

  res.json(player)
})

router.put('/', async (req, res) => {
  const data: IPlayer = req.body

  if (!isPlayer(data)) {
    res.status(500).end()
    return
  }

  const player = await update<IPlayer>('players', data)

  res.json(player)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await remove<IPlayer>('players', id)

  res.status(204).end()
})

export default router
