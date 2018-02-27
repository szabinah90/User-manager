let usersDB = [];

let idCounter = 0;

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

const create = (userObj) => {
  let newUser = {
    id: idCounter,
    username: userObj.username
  };
  usersDB.push(newUser);
  idCounter++;
  return userObj;
};

const destroy = (id) => {
  usersDB.forEach((user) => {
    if (user.id === id) {
      let index = user.indexOf(id);
      let userToDel = usersDB.splice(index, 1);
      return userToDel;
    }
  });
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
