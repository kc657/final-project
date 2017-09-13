const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 6003

app.use(express.static(__dirname + '/HTML'))

// to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
// to config API to use cookieParser
app.use(cookieParser())

// Prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  // Remove caching
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

// HOME
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/HTML/index.html')
})

// Controller Routes
app.use('/', require('./controller/restapi/router'))

app.listen(port, function () {
  console.log(`App running on ${port}`)
})
