const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()
const {User} = require('../models/userModel.js')


loginRouter.post('', async (request, response)=> { 
    const {username, password} = request.body
    
    const foundUser = await User.findOne({username})

    const correctPassword = foundUser === null? false : true

    
    if(foundUser === null ){
        return response.status(401).json({
            error: 'username not found'
          })
    }
    
    if(!correctPassword ){
        return response.status(401).json({
            error: 'invalid username or password'
          })
    }

    const tokenUser = {
        username: foundUser.username,
        id: foundUser.id
    }
    console.log('tokenUser', tokenUser)

    const token = jwt.sign(
        tokenUser, 
        process.env.SECRET,
        {expiresIn: 60*60*10})  

    console.log('', token);
    
    response.status(201).send({token,username: foundUser.username, name:foundUser.name})

})

module.exports = loginRouter