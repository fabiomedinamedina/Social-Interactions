'use strict'
const mongo = require('./src/config/mongo.db')
const server = require('./src/config/express')
const port = 3100

mongo.then(
  () => {
    console.log('Running Mongo Database')
    server.listen(port, () => console.log(`Running Server on port: ${port}`))
  },
  error => console.warn(error)
).catch(err => console.warn(err));