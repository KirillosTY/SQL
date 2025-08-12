const {User} = require('../models/userModel')
const userRouter = require('express').Router()
const {userValidation} = require('../middleware/userCatcher')
const { Blog } = require('../models/blogModel')
const { tokenUser } = require('../middleware/userCatcher')
const { Reading } = require('../models')

userRouter.get('/',tokenUser, async (req,res) => {

    

    const users = await User.findAll({
        include:[ {
                model: Blog,
                attributes: { 
                    exclude: ['userId'],
                }
            },
            {
                model: Blog,
                as:'reading_aim',
                attributes: ['title'],
                through: {
                attributes: [
                    'read',
                    'id'
                ]
                }
            }
           
        ]
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



userRouter.get('/:id',tokenUser, async (req,res) => {
    let where
    
    if(req.query.search){
        where = {
          read: req.query.search
       
        }
      
    }

    const users = await User.findByPk(req.params.id,{
        include:[ {
                model: Blog,
                attributes: { 
                    exclude: ['userId'],
                }
            },
            {
                model: Blog,
                as:'reading_aim',
                attributes: ['title'],
                through: {
                  attributes: [
                      'read',
                      'id'
                  ],
                  where
                }
            }
           
        ],
        
    })

    return res.status(200).json(users)

})

module.exports = userRouter