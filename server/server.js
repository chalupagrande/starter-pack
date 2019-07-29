'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

app.use('/', express.static('dist'))

app.post('/api', (req, res)=>{
  console.log(req.body)
  res.send("You typed this: " + req.body.value)
})

app.listen(port, ()=> {
  console.log('Server listening on ' + port)
})