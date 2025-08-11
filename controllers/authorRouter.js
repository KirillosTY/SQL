const {User} = require("../models/userModel");
const {Blog} = require('../models/blogModel')
const { sequelize } = require("../utils/db");

const  authorRouter  = require("express").Router();



authorRouter.get('/', async (req,res) => {
    
    
 
   const users = await Blog.findAll({
       

        order: [['author', 'DESC']],
        group:['author'],
    

        attributes: [
            'author',
            [sequelize.fn('COUNT', sequelize.col('title')), 'Articles'],

            [sequelize.fn('SUM', sequelize.col('likes')), 'likes']
    
        ]
    })


    return res.status(200).send(users)

})


module.exports = authorRouter