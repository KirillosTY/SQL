const {Access} = require("../models/accessModel.js")
const { User } =  require ("../models/userModel.js")
const {errorHandler } = require("./error")
const jwt = require('jsonwebtoken')

const userValidation = async(req,res,next) => {

    const user = req.body
        
    if(!(user.username && user.password && user.name)){
        errorHandler("Invalid data", 404)
    }


    next()
}

const tokenGetter = async (request, response, next) => {
    const auth = await request.get('authorization')
    console.log('auth', auth)
    if(auth && auth.startsWith('Bearer ')){
        request.token =  auth.replace('Bearer ','')

    }
    next()
    
   
}

const tokenUser = async(request, response, next) => {
    const userToken = jwt.verify(request.token, process.env.SECRET)
    const user = await User.findByPk(userToken.id)
    console.log('userToken', request.token)
    const accessAllowed = await Access.findOne({
        where:{
            userId:userToken.id,
        accessToken: request.token}
    })
    
    
    if(user){
        if(!user.access){
            if(accessAllowed){
            await accessAllowed.destroy()
            }
            response.status(401).send({error: "Unauthorized access"})
        }
        request.user = user
    } else {
        response.status(401).send({error: "Unauthorized access"})
    }

    if(!accessAllowed){
        response.status(401).send({error: "Unauthorized access"})
        
    } else {
        const timeDiff = (new Date()-new Date(accessAllowed.updatedAt))/1000
        console.log('timeDiff', timeDiff)
        if(timeDiff> 60*60){
            response.status(401).send('Token has expired')
        } 
        
        accessAllowed.changed('updatedAt', true)
        accessAllowed.updatedAt = new Date()
        await accessAllowed.save()
    }
    
}

const userFinder = async(req,res, next) => {
    

    const userFound = await User.findOne({username:req.params.username})

    if(!userFound){
        errorHandler('username not found', 404)
    }
}


module.exports = {
    userValidation,
    userFinder,
    tokenUser,
    tokenGetter
}