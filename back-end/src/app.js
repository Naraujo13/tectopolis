const express = require('express')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const app = express()

MongoClient.connect(keys.url, { useNewUrlParser: true }, (err, dtb) => {
  if (err) return console.log(err)
  const database = dtb.db(keys.name)
  require('./routes')(app, database)
  const PORT = process.env.PORT || 3000
  app.listen(PORT)
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

/* app.use(
  Cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id']
  })
) */
