import { Router } from 'express'

import userController from '../controllers/userController.js'

const usersRoutes = Router()


usersRoutes.post('/', userController.create)

export { usersRoutes }