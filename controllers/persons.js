const person = require('../models/User');

//Get all the users
const getUsers = async(req,res)=>{
    try {
        const result = await person.find()
        res.status(201).send({res:result , msg:' success '})
    } catch (error) {
        res.status(409).send('Failure')
    }
}

//Add a user
const addUser = async (req,res)=>{
    try {
            console.log(req.body)
            const newPerson= new person(req.body);
            const  response = await newPerson.save();
            res.status(201).send({res:response, msg:'this user is added:)'})
    } catch (error) {
        res.status(409).send("sorry! cannot add this user ")
        console.log(error)
    }
}
//Delete user by id
const deleteUserById = async (req,res)=>{
    try {
        const result = await person.deleteOne({"_id" : req.params.id})
        result.deletedCount ? 
        res.send({  msg:'successfully deleted'}) :  res.send({  msg:'User  is already deleted '})
    } catch (error) {
        res.status(400).send('sorry ,User is not  deleted')
    }
}
//Update

const updateUserById = async(req,res)=>{
        try {
            const result = await User.updateOne({"_id" : req.params.id },{$set: {...req.body}})
            result.nModified ?    
            res.send({ msg:"the data is  updated"}) :  res.send({  msg:'the data is already updated '})
        } catch (error) {
            res.status(400).send('OOPS! theres no update')
            
        }
    }



    
module.exports = {
    getUsers, addUser,deleteUserById,updateUserById ,};