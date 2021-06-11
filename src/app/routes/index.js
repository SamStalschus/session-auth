import { Router } from 'express'

import { sessionRoutes } from './authenticate.routes.js'
import { usersRoutes } from './users.routes.js'
import ensureAuthenticate from '../shared/middlewares/ensureAuthenticate.js'

const router = Router()

router.use('/login', sessionRoutes)
router.use('/signup', ensureAuthenticate, usersRoutes)
router.use('/', ensureAuthenticate)

export { router }