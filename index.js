const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello <b>Maicol</b>')
})
 
app.listen(3000)