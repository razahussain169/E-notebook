const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 5000
var cors = require('Cors')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello Raza')
})


app.use('/api/Auth',require('./routes/Auth'));
app.use('/api/Notes',require('./routes/Notes'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})