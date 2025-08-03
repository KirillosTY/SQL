require('dotenv').config()

const { Sequelize, Model, DataTypes } = require('sequelize')
const express = require('express')
const app = express() 
const cors = require('cors')


app.use(cors())

app.use(express.json())
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect:'postgres',
  protocol:'postgres'
});


class Blog extends Model {}

Blog.init({
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  author: {
    type: DataTypes.TEXT,

  },
  title:{
    type: DataTypes.TEXT,
    allowNull:false
  },
  url: {
    type:DataTypes.TEXT,
    allowNull:false
  },
  likes: {
    type:DataTypes.INTEGER,
    allowNull:false
  }
}
 ,
  {
  sequelize,
  underscored:true,
  timestamps: true,
  modelName:'blog'
  }
)

Blog.sync()

app.get('/api/blogs', async(req,res) => {
   const blogs  = await Blog.findAll()
   
   return res.status(200).json(blogs)

})  


app.post('/api/blogs', async(req,res) => {
   const blogToAdd = req.body
   console.log('req.body', req.body)
   if(blogToAdd == undefined){
    return res.status(403).send("Data is invalid", blogToAdd)
   } else {
     try {
      const blogAdded = Blog.create(blogToAdd)
      return res.status(200).json(blogAdded)
     } catch(error) {
    
      console.log('error', error)
    }
   }
   
})


app.delete('/api/blogs/:id', async(req,res) => {
   const idToDelete = req.params.id

  try {
    console.log('idToDelete', idToDelete)

  const blogs = await Blog.destroy({where:{id:idToDelete}})
   return res.status(200).json(blogs)
  } catch(error) {
    console.log('error', error)
    return res.status(403).send("Id is invalid", idToDelete)

  }
})



app.listen(process.env.PORT, ()=> {
 console.log(`running on port ${process.env.PORT}`)
})