'use strict'
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1/twitter'
const options = { 
  useNewUrlParser: true ,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
}

module.exports =  mongoose.connect(url, options)
