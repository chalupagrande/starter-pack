'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
var io = require("socket.io")(app.listen(3000));
// const router = express.Router()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//FOR BLUEMIX
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(express.static('client'))

app.post('/api', (req, res)=>{
  console.log(req.body)
  res.send("You typed this: " + req.body.value)
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
console.log(`listening on ${port}`)