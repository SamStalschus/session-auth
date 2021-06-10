import express from 'express'

import createConnection from './shared/infra/mongoose/index.js'
import { router } from './routes/index.js'

import { AppError } from './shared/errors/AppError.js'

createConnection()

const app = express()

app.use(express.json())

app.use(router)

export { app }