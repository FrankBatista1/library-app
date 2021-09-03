const { Schema, model } = require('mongoose');// importing schema and model

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})
//schema let us interact directly into database

module.exports = model('User', UsersSchema)// name of the model in database and schema