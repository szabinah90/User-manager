let usersDB = [];

const getAll = () => {
  return usersDB;
};

const get = (id) => {
  usersDB.forEach((user) => {
    if (user.id === id) {
      return user;
    }
  });
};

const create = () => {

};

const destroy = (id) => {

};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
