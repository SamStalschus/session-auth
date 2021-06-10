import { Router } from 'express'

import userController from '../controllers/userController.js'

const usersRoutes = Router()


usersRoutes.post('/cadastro', userController.create)

export { usersRoutes }