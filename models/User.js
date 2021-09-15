//mongoose Schema
const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    id : {type :Number, unique:true},
    name :{type:String, required: true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    password:{type:Number, required:true}

})
//The .model() 
const User = mongoose.model('User', userSchema)
//export user
module.exports = User