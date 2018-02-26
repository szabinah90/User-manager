const express = require('express');

const roles = express();

let rolesDB = [];

let idCounter = 0;

// create
roles.post('/create', (req, res) => {
  let rolename = req.query.rolename;
  let rolesObject = {
    id: idCounter,
    rolename: rolename
  };
  rolesDB.push(rolesObject);
  idCounter++;
  res.json({action: 'create', success: true});
});

// index
roles.get('/', (req, res) => {
  res.json(rolesDB);
});

// show
roles.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id: id, action: 'show'});
});

// new
roles.get('/new', (req, res) => {
  res.json({action: 'new'});
});

// edit
roles.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'edit'});
});

// update
roles.put('/:id/update', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update'});
});

// destroy
roles.delete('/:id/delete', (req, res) => {
  let id = req.params.id;
  arrayRemove(rolesDB, id);
  res.json({id: id, action: 'delete'});
});

const arrayRemove = (array, valueToRemove) => {
  let index = array.indexOf(valueToRemove);
  array.splice(index, 1);
};

module.exports = roles;
