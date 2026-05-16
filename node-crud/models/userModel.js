let users = [

  {
    id: 1,
    name: 'luiz bangsoy',
    email: 'luizbangsoy@gmail.com'
  },

    {
    id: 2,
    name: 'kailee yshi',
    email: 'kaileeyshi@gmail.com'
  },

];

// read all
const findAll = () => {
  return users;
};

// read by id
const findById = (id) => {
  return users.find(user => user.id === id);
};

// create user
const create = (user) => {
  users.push(user);
};

//update
const update =(id, updatedUser) => {
  const index = users.findIndex(
    user => user.id === id
  );

  users[index] = updatedUser;
};

// delete
const remove = (id) => {
  users = users.filter(
    user => user.id != id
  );
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};