import { Router } from 'express'

import { userAuthenticate } from '../controllers/authenticateController.js'

const sessionRoutes = Router()

sessionRoutes.get('/sessions', userAuthenticate)

export { sessionRoutes }