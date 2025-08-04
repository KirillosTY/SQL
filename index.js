require('dotenv').config()
const {PORT} = require('./utils/config') 
const express = require('express')
const app = express() 
const cors = require('cors')
const {connectToDB} = require('./utils/db')
const {router:blog_route} = require('./controllers/blogRouter')
const { error } = require('./middleware/error')

app.use(cors())



app.use(express.json())

app.use('/api/blogs/',blog_route)

app.use(error)


const start = async () => {
  await connectToDB()
  app.listen(PORT, ()=> {
  console.log(`running on port ${PORT}`)
  })
}

start()