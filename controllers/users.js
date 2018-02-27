const express = require('express');

const users = express();

const userModel = require('./../models/user.js');

users.use(userModel);

// index
users.get('/', (req, res) => {
  let database = userModel.getAll();
  res.json(database);
});

// create
users.post('/create', (req, res) => {
  let createdUser = userModel.create({username: req.query.username});
  res.json(createdUser);
});

// show
users.get('/:id', (req, res) => {
  let user = userModel.get(req.params.id);
  res.json(user);
});

// new
users.get('/new', (req, res) => {
  res.json({action: 'new'});
});

// edit
users.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'edit'});
});

// update
users.put('/:id/update', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update'});
});

// destroy
users.delete('/:id/delete', (req, res) => {
  let deletedUser = userModel.destroy({id: req.params.id});
  res.json(deletedUser);
});

module.exports = users;
