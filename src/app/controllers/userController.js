import usersServices from '../services/usersServices.js'


import { AppError } from '../shared/errors/AppError.js'


export default {

  async create(req, res) {
    try {
      const { name, email, password } = req.body

      await usersServices.createUser({ name, email, password })

      res.send({ message: 'User created!' }).status(201)
    } catch (error) {
      if (AppError) {
        res.status(error.status || 500).json({
          message: error.message
        })
      }
    }
  }
}