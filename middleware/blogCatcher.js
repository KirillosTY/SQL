const { Blog } = require( "../models/blogModel.js")
const { errorHandler } = require("./error.js")

const blogFinder = async(req,res, next) => {
 
    if(req.params.id == undefined){
        errorHandler('Id undefined!',404)
    }
    req.blog =  await Blog.findByPk(req.params.id)
    console.log('req.blog', req.blog)
    if(req.blog == undefined) {
        errorHandler('Blog not found', 404)
    }

    next()
} 


const blogValidation = async(req,res,next) => {

    const blog  = req.body
   if(!( blog.title && blog.url) || isNaN(blog.likes)){
        errorHandler('Blog is not valid', 404)
   }
   next()
}

module.exports = {
    blogFinder,
    blogValidation
}