//import mongoose
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {type: String , required: true},
    surname: {type: String , required: true},
    email: {type: String , required: true},
    age: {type:Number, default:25},
});
//Model
module.exports = person = mongoose.model('person', personSchema);