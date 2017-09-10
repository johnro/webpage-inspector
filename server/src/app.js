const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}, your user was registered!`
  })
})

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world!'
  })
})

app.listen(process.env.PORT || 8081)

