'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')
//const cookieSession = require('cookie-session')
const session = require('express-session')
const passport = require('./passport')
const cookieParser = require("cookie-parser")

const app = express()
const router = express.Router()

app.disable('x-powered-by') 
/* app.use(cookieSession({
  name: 'session',
  keys: 'cookietw',
  maxAge: 24 * 60 * 60 * 100
})) */
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'cookie-tw'
}))
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(morgan('dev'))
app.use(compression())
app.use(cors({ 
  origin: 'http://localhost:3000', 
  credentials: true,
  methods: 'GET,POST'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', router)

const authCheck = (req, res, next) => {
  if (!req.user) res.status(200).json({ status: false, message: 'usuario no tiene autenticación' })
  else next()
}

app.get('/', authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: 'usuario authenticado',
    user: req.user,
    cookies: req.cookies
  });
});
require('../routes')(router)
module.exports = app