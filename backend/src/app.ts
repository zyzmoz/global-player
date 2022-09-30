import express from 'express'
import appStatus from 'express-status-monitor'
import { router } from './routes'

const app = express()
app.use(appStatus())

app.use(express.json())

app.use('/api/v1', router)

export { app }
