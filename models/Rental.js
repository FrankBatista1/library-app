const {Schema, model} = require('mongoose')

const RentalsSchema = Schema ({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  book: {type: Schema.Types.ObjectId, ref: 'Book'}
})

module.exports = model('Rental', RentalsSchema)