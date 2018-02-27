let usersDB = [];

let idCounter = 0;

const getAll = () => {
  return usersDB;
};

const get = (id) => {
  return usersDB.find((user) => {
    return user.id === id;
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
  let user = get(id);
  let index = usersDB.indexOf(user);
  usersDB.splice(index, 1);
  return user;
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
