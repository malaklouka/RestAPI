
const express = require('express')
//use cors
// cors is for providing a Connect/Express middleware that can be used to enable CORS with various options
const cors = require('cors')
const dotenv = require('dotenv')

const persons = require('./routes/persons')
const connectdb = require('./config/connectdb')
const app = express()
dotenv.config();
connectdb();

app.use('/api/users',persons) // every route inside of the persons routes begin with users : http://localhost:5000/api/users
app.use(express.json())
app.use(cors());
// PORT 
const PORT = process.env.PORT || 5000
app.listen(PORT,(err)=>{
    if (err){console.log(err)}
    else { console.log( `Server is running at ${PORT}`)}
})
