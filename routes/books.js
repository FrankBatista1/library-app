const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

//Getting all -- [GET]
router.get('/book', async(req, res) => {
    try{
      const books = await Book.find()
      res.json(books)
    } catch(err){
      res.status(500).json({messege: err.messege})
    }
})
//Getting One -- [GET]
router.get('/book/:id', (req, res) => {
  const book = Book.findbyId(req.params.id);
   book.then(val => {
     res.json(val)
   })                                          
})

//Creating One -- [POST]
router.post('/book', async (req, res) => {
   const book = new Book({
     title: req.body.title,
     author: req.body.author,
     number_of_pages: req.body.number_of_pages,
     genre: req.body.genre
    })
     try{
       const newBook = await book.save()
     res.status(201).json({newBook})
   } catch(err) {
     res.status(400).json({err})
   }
})


//Updating One -- [PUT]
router.put('book/:id', (req, res) => {
  const toUpdate = Book.findByIdAndUpdate(req.params.id, req.body, {new : true})
   toUpdate.then(val => {
     return res.json(val)
   })
})

//Deleting One -- [DELETE]
router.delete('book/:id', (req,res) => {
  Book.findByIdAndDelete(req.params.id)
  .then(() => {
    return res.json({message:'Book deleted succesfully'})
  }).catch(err => {
    return res.json({message: `Book couldn't be deleted ${err}`})
  })
})



module.exports = router