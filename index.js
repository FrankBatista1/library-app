//set up libraries
const express = require('express');
const mongoose = require('mongoose');
const app = express()
//mongoose makes easier to interac --> mongodb


mongoose.connect('mongodb://localhost/library')
.then(() => console.log('DB Conected'))



//midleware
//letting our server accept json syntax
app.use(express.json()); 


//anything in localhost..../users is going to be here
const usersRouter = require('./routes/users.js')
app.use('./users', usersRouter)


const port = 5000 //good practice to put in a variable
app.listen(port, () => console.log('Server started'))