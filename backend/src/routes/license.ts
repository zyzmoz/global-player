import { Router } from 'express'

import { ILicense, isLicense } from '../models/License'

import { findMany, findOne, insert, remove, update } from '../shared/dbFunctions'

const router = Router()

// License Routes
router.get('/', async (_req, res) => {
  const licenses = await findMany<ILicense>('licenses')
  res.json(licenses)
})

router.get(`/:id`, async (req, res) => {
  const { id } = req.params
  const license = await findOne<ILicense>('licenses', id)

  res.json(license)
})

router.post('/', async (req, res) => {
  const data: ILicense = req.body

  if (!isLicense(data)) {
    res.status(500).end()
  }

  const license = await insert<ILicense>('licenses', data)

  res.json(license)
})

router.put(`/`, async (req, res) => {
  const data = req.body

  if (!isLicense(data)) {
    res.status(500).end()
  }

  const license = await update<ILicense>('licenses', data)

  res.json(license)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await remove<ILicense>('licenses', id)

  res.status(204).end()
})

export default router
