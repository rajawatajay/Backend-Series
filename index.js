require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) =>{
    res.send('2021pietcsajay011@poornima.org')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Go and Login first to get content from here!</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})