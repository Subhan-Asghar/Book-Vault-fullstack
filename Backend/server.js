const mongoose =require('mongoose') 
const express = require('express')
const router=require('./routes/bookRoute.js')
const app = express()
const port = 3000
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/library')
  .then(() => console.log('Connected!'));

app.use('/',router)
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

