const { Access } = require('../models/accessModel')

const logoutRouter = require('express').Router()



logoutRouter.delete('/', async(req,res) => {


    const logoutUser = await Access.destroy({
        where :
        {userId:req.user.id}
    })

    if(!logoutUser){
        res.status(404).send('You are already out, probably')
    
    }

    res.status(200).send('User logged out')

})

module.exports = logoutRouter