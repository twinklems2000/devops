const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    hey: 'Repunzel 👩‍🔧',
  })
})

app.get('/login', (req, res) => {
  res.json({
    hey: 'Login Successfull, Repunzel 👩‍🔧',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
