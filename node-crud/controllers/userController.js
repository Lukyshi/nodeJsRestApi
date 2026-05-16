const userModel = require('../models/userModel');

// get all users
const getAllUsers = (req, res) => {
  const users = userModel.findAll();

  res.json(users);

};

// get by id
const getUserById = (req, res) => {
  const id = req.params.id;

  const user = userModel.findById(id);

  res.json(user);

};

// create user
const createUser = (req, res) => {
  const user = req.body;

  userModel.createUser(user);

  res.json({
    message: 'user created'
  });
};

// update user
const updateUser = (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  userModel.update(id, updateUser);

  res.json({
    message: 'user updated'
  });
};

//delete user
const deleteUser = (req, res) => {
  const id = req.params.id;

  userModel.remove(id);

  res.json({
    message: 'user deleted'
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}