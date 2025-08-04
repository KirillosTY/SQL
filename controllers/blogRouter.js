const router = require('express').Router()
const {errorHandler: Error, errorHandler} = require('../middleware/error.js')
const {Blog} = require('../models/index')

const {blogFinder, blogValidation} = require('../middleware/blogCatcher.js')
router.get('/', async(req,res) => {
   const blogs  = await Blog.findAll()
   
   return res.status(200).json(blogs)

})  


router.post('/', async(req,res) => {
    blogValidation(req.body)
   const blogToAdd = req.body

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
 
  const blog = req.blog
  try {
    const blog = blog.destroy()
   return res.status(204)
  } catch(error) {
    console.log('error', error)
    return res.status(403).send("Id is invalid", idToDelete)

  }
})

module.exports = {
    router
}