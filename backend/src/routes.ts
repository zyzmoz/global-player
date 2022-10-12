import { Router } from 'express'

const router = Router()

// Root
router.get('/', (_req, res) => {
  res.send('Hello World')
})

export {
  router
}