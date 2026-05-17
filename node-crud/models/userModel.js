const prisma = require("../config/prisma");

// read all
const findAll = async () => {
  return await prisma.user.findMany();
};

// read by id
const findById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(id)
    }
  });
};

// create user
const create = async(user) => {
  return await prisma.user.create({
    data: user
  });
};

//update
const update = async(id, updatedUser) => {
  return await prisma.user.update({
    where: {
      id: parseInt(id)
    },
    data: updatedUser
  });
};

// delete
const remove = async(id) => {
  return await prisma.user.delete({
    where: {
      id: Number(id)
    }
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};