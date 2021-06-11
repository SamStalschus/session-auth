import passportLocal from 'passport-local'
import { compare } from 'bcrypt'

import usersRepository from '../../repositories/usersRepositories.js'

const LocalStrategy = passportLocal.Strategy


export default function (passport) {

  async function findUser(username) {
    return await usersRepository.findOne({ 'username': username })
  }

  async function findUserById(id) {
    return await usersRepository.findOne({ '_id': id })
  }

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await findUserById(id)
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  })

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
    async (username, password, done) => {
      try {
        const user = await findUser(username);

        // usuário inexistente
        if (!user) { return done(null, false) }

        // comparando as senhas
        const isValid = await compare(password, user.password);
        if (!isValid) return done(null, false)

        return done(null, user)
      } catch (err) {
        done(err, false);
      }
    }
  ))
}