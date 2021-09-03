const {Schema, model} = require('mongoose')

const RentalsSchema = Schema ({
  user: Schema.Types.ObjectId,
  book: Schema.Types.ObjectId
})

module.exports = model('Rental', RentalsSchema)