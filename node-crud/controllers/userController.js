const userModel = require('../models/userModel');

// get all users
const getAllUsers = async (req, res) => {
  const users = await userModel.findAll();
  
  res.json(users);

};

// get by id
const getUserById = async (req, res) => {
  const id = req.params.id;

  const user = await userModel.findById(id);

  res.json(user);

};

// create user
const createUser = async (req, res) => {
  const user = req.body;

  await userModel.createUser(user);

  res.json({
    message: 'user created'
  });
};

// update user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  await userModel.update(id, updatedUser);

  res.json({
    message: 'user updated'
  });
};

//delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;

  await userModel.remove(id);

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