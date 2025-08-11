const {User} = require('../models/userModel')
const userRouter = require('express').Router()
const {userValidation} = require('../middleware/userCatcher')
const { Blog } = require('../models/blogModel')
const { tokenUser } = require('../middleware/userCatcher')

userRouter.get('/',tokenUser, async (req,res) => {

    const users = await User.findAll({
        include: {
        model: Blog,
        attributes: { exclude: ['userId'] }
        }
    })

    return res.status(200).json(users)

})


userRouter.post('/',userValidation, async(req,res) => {

    //add validation
    console.log('req.body', req.body)

    const userCreated = await User.create(req.body)
    
    return res.status(200).json(userCreated)
})


userRouter.put('/:username',tokenUser, async(req,res) => {

    //add validation

    const foundUser = await User.findOne({username: req.params.username})

    const updatedUser = await foundUser.save()    
    return res.status(200).json(updatedUser)
})



module.exports = userRouter