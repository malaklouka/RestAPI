//import
var express = require('express');
var router = express.Router();
const Us = require('../controllers/persons');

//routes
router.use(express.json());
//GET
router.get('/', Us.getUsers)

//POST   
router.post('/', Us.addUser)

//PUT 
router.put("/:id", Us.updateUserById)

//DELETE
router.delete('/deleteUser/:id', Us.deleteUserById)

module.exports = router;