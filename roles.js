const express = require('express');

const roleManager = express();

let roles = [];

let idCounter = 0;

// ROLES

roleManager.post('/create', (req, res) => {
  let rolename = req.query.rolename;
  let rolesObject = {
    id: idCounter,
    rolename: rolename
  };
  roles.push(rolesObject);
  idCounter++;
  res.json({action: 'create', success: true});
});

roleManager.get('/', (req, res) => {
  res.json(roles);
});

roleManager.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id: id, action: 'show'});
});

roleManager.get('/new', (req, res) => {
  res.json({action: 'new'});
});

roleManager.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'edit'});
});

roleManager.put('/:id/update', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update'});
});

roleManager.delete('/:id/delete', (req, res) => {
  let id = req.params.id;
  arrayRemove(roles, id);
  res.json({id: id, action: 'delete'});
});

const arrayRemove = (array, valueToRemove) => {
  let index = array.indexOf(valueToRemove);
  array.splice(index, 1);
};

module.exports = roleManager;
