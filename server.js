//import 
const express = require('express')
const mongoose = require('mongoose')
const User=require('./models/User')
var router = express.Router();
router.use(express.json());

//dotenv
require('dotenv').config()

// connecting to database 
const connexion = async() => {
    try {
        let response = mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true ,
             useUnifiedTopology: true,
        })
    console.log('connecting to database.. :) ')
    } catch (err) {
        console.log(err)
    }
} 

const app = express()

connexion()
//routes
//return all user
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

//ADD A NEW USER TO THE DATABASE
router.route('/add').post((req, res) => {
    const name = req.body.name
    const newUser = new User({name})
//save
    newUser.save()
           .then(() => res.json('User added successfully!'))
           .catch(err => res.status(400).json(`Error: ${err}`))
})

//Update user 
router.route('/update/:id').put((req, res) => {
    let updatedUser = User.findByIdAndUpdate({_id: req.params.id}, { $set: {...req.body}})
     updatedUser.save()
                .then(() => res.json('User updated successfully... :)'))
                .catch(err => res.status(400).json(`Error: ${err}`)) 
})

//Delete user
router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete({_id: req.params.id})
        .then(() => res.json('User deleted successfully! :)'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})



// PORT 
app.listen(PORT,(err)=>{
    if (err){console.log(err)}
    else { console.log( `Server is running at ${PORT}`)}
})
module.exports = router
