const readRouter = require('express').Router()
const {tokenUser} = require('../middleware/userCatcher')
const {Reading} = require('../models/readingModel.js')



readRouter.post('/', tokenUser, async( req,res) => {
    
    if(req.body.userId !== req.user.id){
        res.status(404).send('You may only add items to yourself')
    }
    const readList = await Reading.create(req.body)
    const savedRead = {
        blogId: readList.blogId,
        userId: readList.userId
    }

    res.status(200).send(savedRead)
})


readRouter.get('/', tokenUser, async( req,res) => {

    const readList = await Reading.findAll({})
    

    res.status(200).send(readList)
})


readRouter.put('/:id', tokenUser, async( req,res) => {
  
   
    const readItem = await Reading.findByPk(req.params.id)
    if(readItem){

        readItem.read = req.body.read
        await readItem.save()

    } else {
        res.status(404).send('Try again with valid id')

    }
    
    const savedRead = {
        blogId: readItem.blogId,
        userId: readItem.userId
    }

    res.status(200).send(savedRead)
})


module.exports = readRouter;