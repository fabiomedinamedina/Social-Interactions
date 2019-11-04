const passport = require('passport')
const Strategy = require('passport-twitter')
const model = require('../models/user.model')

passport.serializeUser((user, cb) => cb(null, user.idUser))

passport.deserializeUser((id, cb) => {
  model.findOne({idUser: id})
    .then(user => cb(null, user))
    .catch(e => cb(null, e.message))
})

passport.use(
  new Strategy(
    {
      consumerKey: '5e2O7wyed2LpGzJdxqnI84xym',
      consumerSecret: 'E8QGQuH4NHmuNA83PaYKi4eT60ors7JlqTic9bgZlQE5ZwryW4',
      callbackURL: 'http://localhost:3100/api/tw/redirect/',
    },
    async (token, tokenSecret, profile, cb) => {
      const currentUser = await model.findOne({ idUser: profile.id })

      if (!currentUser) {
        const newUser = await new model({
          photo: profile.photos[0].value,
          name: profile.displayName,
          idUser: profile.id,
          username: profile.username
        }).save()

        if (newUser) cb(null, newUser)
      }
      cb(null, currentUser)
    }
  )
)


module.exports = passport