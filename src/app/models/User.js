import mongoose from 'mongoose'

const Users = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String }
  },
  {
    timestamps: true
  })

export default mongoose.model('Users', Users);
