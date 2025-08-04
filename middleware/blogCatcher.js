const { Blog } = require( "../models/blogModal.js")
const { errorHandler } = require("./error.js")

const blogFinder = async(req,res, next) => {
 
    if(req.params.id == undefined){
        errorHandler('Id undefined!',404)
    }
    req.blog =  await Blog.findByPk(req.params.id)
  
    if(req.blog == undefined) {
        errorHandler('Blog not found', 404)
    }

    next()
} 


const blogValidation = (blog) => {
   if(!( blog.title && blog.url) || isNaN(blog.likes)){
        errorHandler('Blog is not valid', 404)
   }
}

module.exports = {
    blogFinder,
    blogValidation
}