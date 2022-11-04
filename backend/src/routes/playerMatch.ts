import { Router } from 'express'
import { IPlayerMatch, isPlayerMatch } from '../models/PlayerMatches'
import { findMany, findOne, insert, remove, update } from '../shared/dbFunctions'

const router = Router()

router.get('/', async (_req, res) => {
  const matches = await findMany<IPlayerMatch>('playerMatches')
  res.json(matches)
})

router.get(`/:id`, async (req, res) => {
  const { id } = req.params
  const match = await findOne<IPlayerMatch>('playerMatches', id)

  res.json(match)
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
  await remove<IPlayerMatch>('playerMatches', id)

  res.status(204).end()
})

export default router
