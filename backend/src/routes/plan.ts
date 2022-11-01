import { Router } from 'express'

import { IPlan, isPlan } from '../models/Plan'
import { findMany, findOne, insert, remove, update } from '../shared/dbFunctions'

const router = Router()

router.get('/', async (_req, res) => {
  const plans = await findMany<IPlan>('plans')
  res.json(plans)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const plan = await findOne<IPlan>('plans', id)
  res.json(plan)
})

router.post('/', async (req, res) => {
  const data = req.body

  if (!isPlan(data)) {
    res.status(500).end()
    return
  }
  const plan = await insert<IPlan>('plans', data)

  res.json(plan)
})

router.put('/', async (req, res) => {
  const data: IPlan = req.body

  if (!isPlan(data)) {
    res.status(500).end()
    return
  }

  const plan = await update<IPlan>('plans', data)

  res.json(plan)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await remove<IPlan>('plans', id)

  res.status(204).end()
})

export default router
