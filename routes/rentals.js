const express = require('express')
const router = express.Router()
const Rental = require('../models/Rental')

// [GET]
router.get('/rentals', async (req, res) => {
    try{
      const rentals = await Rental.find().populate('user').populate('book')
        res.json(rentals)
    } catch (err) {
        res.status(500).json({messege: err.messege})
    }
})
// [GET1]
router.get('/rentals/:id', (req, res) => {
    const rentals = Rental.findbyId(req.params.id)
      rentals.then(val => res.json(val))
  
})
// [POST]
router.post('/rentals/', async (req, res) => {
    const rental = new Rental({
      user: req.body.user,
      book: req.body.book
    })
    try{
      const newRental = await rental.save();
      res.status(201).json({newRental})
    } catch(err){
      res.status(400).json({err})
    }

})
// [UPDATE]
router.put('/rentals/:id', async (req, res) => {
    const rentalsupd = await Rental.findByIdAndUpdate(req.params.id, req.body, {new : true})
    try{
      return res.json(rentalsupd)
    }catch(err){
      return res.json(err)
    }
})

// [DELETE]
router.delete('/rentals/:id/', async (req, res) => {
  const rentalToDelete = await Rental.findByIdAndDelete(req.params.id)
  try{
    return res.json('deleted successfuly')
  } catch(err){
    return res.json(err)
  }
})

module.exports = router
