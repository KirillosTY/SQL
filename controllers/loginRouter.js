const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()
const {User} = require('../models/userModel.js')
const { Access } = require('../models/accessModel.js')


loginRouter.post('', async (request, response)=> { 
    const {username, password} = request.body
    
    const foundUser = await User.findOne({where:{username:username}})
    console.log('foundUser', foundUser)
     if(foundUser){
        if(!foundUser.access){
            response.status(401).send({error: "Unauthorized access"})
        }

    }
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
    )  

    const sessionUser = {
        user_id:foundUser.id,
        accessToken: token
    }

    const tokenIsActive = await Access.findOne({
        where: {
        userId:foundUser.id
    }})

    if(tokenIsActive){
        response.status(201).send({token:tokenIsActive.accessToken,username: foundUser.username, name:foundUser.name})

    } else {
        const tokenVerified  = await Access.create(sessionUser)
        console.log('tokenVerified', tokenVerified)
        response.status(201).send({token:tokenVerified.accessToken,username: foundUser.username, name:foundUser.name})
    }
    
  
})

module.exports = loginRouter