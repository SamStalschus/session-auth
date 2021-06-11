import usersServices from '../services/usersServices.js'


import { AppError } from '../shared/errors/AppError.js'


export default {

  async create(req, res) {
    try {
      const { email, username, password } = req.body

      await usersServices.createUser({ email, username, password })

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