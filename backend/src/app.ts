import express from 'express'
import appStatus from 'express-status-monitor'
import { router } from './routes'
import playerMatchRouter from './routes/playerMatch'

const app = express()
app.use(appStatus())

app.use(express.json())

// TODO - Authorization

app.use('/api/v1', router)
app.use('/api/v1', playerMatchRouter)

export { app }
