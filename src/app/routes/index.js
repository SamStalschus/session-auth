import { Router } from 'express'

import { sessionRoutes } from './authenticate.routes.js'
import { usersRoutes } from './users.routes.js'

const router = Router()

router.use('/sessions', sessionRoutes)
router.use(usersRoutes)

export { router }