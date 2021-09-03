const express = require('express')
const router = express.Router()
const User = require('../models/User')

//Getting all -- [GET]
router.get('/user', async(req, res) => {
    try{
      const users = await User.find()
      res.json(users)
    } catch(err){
      res.status(500).json({messege: err.messege})//the error has to be displayed in json because it is a json api
    }//500 means that the error comes from the server 
})
//Getting One -- [GET]
router.get('/user/:id', (req, res) => {// req.params.id used to get the parameter ('/:id')
  const user = User.findbyId(req.params.id);//going to return the actual user as a value  ------------------- try res.send(req.params.id)
   user.then(val => {
     res.json(val)// displaying the object
   })                                          
})

//Creating One -- [POST]
router.post('/user', async (req, res) => {
   const user = new User({
     name: req.body.name,
     lastName: req.body.lastName
   })//this is requesting the body for the value of the object
   try{
     const newUser = await user.save()
     res.status(201).json({newUser})//201 -> succesfully created
   } catch(err) {
     res.status(400).json({err})//400 -> bad input by the user
   }
})


//Updating One -- [PUT]
router.put('/user/:id', (req, res) => {
  const toUpdate = User.findByIdAndUpdate(req.params.id, req.body, {new : true})// parameters: id in the url... what does the other parameters means
   toUpdate.then(val => {
     return res.json(val)
   })
})

//Deleting One -- [DELETE]
router.delete('/user/:id', (req,res) => {
  User.findByIdAndDelete(req.params.id)
  .then(() => {
    return res.json({message:'User deleted succesfully'})
  }).catch(err => {
    return res.json({message: `User couldn't be deleted ${err}`})
  })
})



module.exports = router