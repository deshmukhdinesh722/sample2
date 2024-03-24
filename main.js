const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Jay Shree Ram')
})

app.get('/instagram', (req, res) => {
    res.send('dinesh_7602_')
  })

  app.get('/login',(req,res)=> {
    res.send('<h1>Login Here</h1><br><form>Enter your Name: <input type="Text" palceholder="your name"></form>')
  })

app.get('/youtube',(req,res)=> {
res.send('<a href="https://www.youtube.com/@TheContentTrader">The content Trader</a>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})