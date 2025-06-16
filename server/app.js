const express = require('express')
const app = express()
const port = 3005;
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/photos', (req, res) => {
  // res.setHeader('Access-Control-Allow-origin', 'http://localhost:5173');

  console.log(express.json(path.join(__dirname, 'public/photos.json')))

  res.send(express.json(path.join(__dirname, 'public/photos.json')))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})