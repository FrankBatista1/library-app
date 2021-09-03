const { Schema, model } = require('mongoose');// importing schema and modelmethod

const BooksSchema= new Schema({
  title: String,
  author: String,
  number_of_pages: Number,
  genre: String,
})
//schema let us interact directly into database

module.exports = model('Book', BooksSchema)// name of the model in database and schema