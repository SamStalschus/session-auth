import User from '../models/User.js'


export default {

  async create(filter) {
    try {

      return await User.create(filter)

    } catch (error) {
      console.log(`[User create] - ${error.message}`)
    }
  },

  async findOne(filter, projection) {

    console.log(filter)
    const user = await User.findOne(filter, projection)

    console.log(user)
    return user
  }
}