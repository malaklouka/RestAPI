//Connect to database
const mongoose = require('mongoose');

//create a cluster
const MONGO_URI ='mongodb+srv://dbList:list@cluster0.bp5m1.mongodb.net/userDB?retryWrites=true&w=majority'


const connectdb = ()=>{
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(console.log('successfully connected ')).catch((error)=>console.log('cannot connect '+ error))

}

module.exports=connectdb