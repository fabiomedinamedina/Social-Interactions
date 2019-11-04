'use strict'
const mongo = require('./src/config/mongo.db')
const server = require('./src/config/express')


mongo.then(
  () => {
    console.log('Running Mongo Database')
    server.listen(3100, () => console.log('Running Server'))
  },
  error => console.warn(error)
).catch(err => console.warn(err));