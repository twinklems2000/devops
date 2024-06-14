const mongoose = require('mongoose')

const DATABASE = 'mongodb://mymongo:27017/test'
// const DATABASE = 'mongodb://127.0.0.1:27017/test'

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log('DB connected successfully 🎉')
  })
  .catch(() => {
    console.log('Error connecting DB 🙁')
  })
