const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');


// get all users
router.get('/', userController.getAllUsers);

// get by id
router.get('/:id', userController.getUserById);

//create 
router.post('/', userController.createUser);

//update
router.put('/:id', userController.updateUser);

//delete
router.delete('/:id', userController.deleteUser);

module.exports = router;