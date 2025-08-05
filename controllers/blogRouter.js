const router = require('express').Router()
const {Blog, User} = require('../models/index')

const {blogFinder, blogValidation} = require('../middleware/blogCatcher.js')
const { LOCK } = require('sequelize')
router.get('/', async(req,res) => {
   const blogs  = await Blog.findAll({
    attributes: {exclude: ['userId']},
    include: {
      model: User,
      attributes: ['username']
    }
   })
   console.log('blogs', blogs)
   return res.status(200).json(blogs)

})  


router.post('/',blogValidation, async(req,res) => {

    const blogToAdd = req.body
    console.log('blogToAdd', blogToAdd, req.tokenUser)
    blogToAdd.userId = req.user.id
    const blogAdded = await Blog.create(blogToAdd)
    return res.status(200).json(blogAdded)
     
   
   
})


router.put('/:id',blogFinder ,async(req,res) => {
 
    const blog =  req.blog
    blog.likes = req.body.likes
    console.log('req.body here', req.body)
    
    const blogUpdated = await blog.save()
    return res.status(204).json(blogUpdated)

})

router.delete('/:id',blogFinder ,async(req,res) => {
 
  
  let blog = req.blog
  try {
     blog = blog.destroy()
   return res.status(204).send("Success")
  } catch(error) {
    console.log('error', error)
    return res.status(403).send("Id is invalid")

  }
})

module.exports = {
    router
}