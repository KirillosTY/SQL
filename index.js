require('dotenv').config()
const {PORT} = require('./utils/config') 
const express = require('express')
const app = express() 
const cors = require('cors')
const {connectToDB} = require('./utils/db')
const {router:blog_route} = require('./controllers/blogRouter')
const { error } = require('./middleware/error')
const userRouter = require('./controllers/userRouter')
const loginRouter = require('./controllers/loginRouter')
const { tokenGetter } = require('../part12-containers-applications/Bloglist/part4/utils/middleware')
const { tokenUser } = require('./middleware/userCatcher')
const authorRouter = require('./controllers/authorRouter')
app.use(cors())



app.use(express.json())

app.use(tokenGetter)
app.use('/api/login', loginRouter)

app.use('/api/blogs/',tokenUser,blog_route)
app.use('/api/user',userRouter)
app.use('/api/authors/',tokenUser,authorRouter)

app.use(error)


const start = async () => {
  await connectToDB()
  app.listen(PORT, ()=> {
  console.log(`running on port ${PORT}`)
  })
}

start()