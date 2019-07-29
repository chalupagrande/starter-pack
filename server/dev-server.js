'use strict'
const express = require('express')
const webpack = require('webpack');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || 4000;
const config = require('../webpack.config.js');
var compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  logLevel: 'warn', publicPath: config.output.publicPath
}))

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}))

app.use('/', express.static('dist'))

app.post('/api', (req, res)=>{
  console.log(req.body)
  res.send("You typed this: " + req.body.value)
})

app.listen(port, ()=> {
  console.log('Server listening on w/ HMR ' + port)
})