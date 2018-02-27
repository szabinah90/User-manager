let rolesDB = [];

let idCounter = 0;

const getAll = () => {
  return rolesDB;
};

const get = (id) => {
  return rolesDB.find((role) => {
    return role.id === id;
  });
};

const create = (roleObj) => {
  let newRole = {
    id: idCounter,
    name: roleObj.rolename
  };
  rolesDB.push(newRole);
  idCounter++;
  return roleObj;
};

const destroy = (id) => {
  let roleToDelete = get(id);
  let index = rolesDB.indexOf(roleToDelete);
  rolesDB.splice(index, 1);
  return roleToDelete;
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
