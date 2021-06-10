import { Router } from 'express'

import { authenticateController } from '../controllers/authenticateController.js'

const sessionRoutes = Router()

const authenticate = new authenticateController()

sessionRoutes.get(authenticate.handle)

export { sessionRoutes }