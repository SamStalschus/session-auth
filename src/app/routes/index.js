import { Router } from 'express'

import { sessionRoutes } from './authenticate.routes.js'

const router = Router()

router.use(sessionRoutes)

export { router }