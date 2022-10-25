import { Router } from 'express'
import { IPlayerMatch, isPlayerMatch } from '../models/PlayerMatches'
import { findMany, findOne, insert, remove, update } from '../shared/dbFunctions'

const router = Router()

router.get('/playermatch', async (_req, res) => {
  const matches = await findMany<IPlayerMatch>('playermatches')
  res.json(matches)
})

router.get(`/playermatch/:id`, async (req, res) => {
  const { id } = req.params
  const match = await findOne<IPlayerMatch>('playermatches', id)

  res.json(match)
})

router.post('/playermatch', async (req, res) => {
  const data: IPlayerMatch = req.body
  if (!isPlayerMatch(data)) {
    res.status(500).end()
    return
  }

  const match = await insert<IPlayerMatch>('playermatches', data)

  res.json(match)
})

router.put('/playermatch', async (req, res) => {
  const data: IPlayerMatch = req.body

  if (!isPlayerMatch(data)) {
    res.status(500).end()
    return
  }

  const match = await update<IPlayerMatch>('playermatches', data)

  res.json(match)
})

router.delete('/playermatch/:id', async (req, res) => {
  const { id } = req.params
  await remove<IPlayerMatch>('playermatches', id)

  res.status(204).end()
})

export default router
