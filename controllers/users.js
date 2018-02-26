const express = require('express');

const users = express();

let usersDB = [];

let idCounter = 0;

const arrayRemove = (array, valueToRemove) => {
  let index = array.indexOf(valueToRemove);
  array.splice(index, 1);
};

// index
users.get('/', (req, res) => {
  res.json(usersDB);
});

// create
users.post('/create', (req, res) => {
  let username = req.query.username;
  let userObject = {
    id: idCounter,
    username: username
  };
  usersDB.push(userObject);
  idCounter++;
  res.json({action: 'create', success: true, object: userObject});
});

// show
users.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json({ // sends back a json file which contains the input argument. / res.send('valami') --> this returns the string 'valami'
    id: id, action: 'show'});
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
  let id = req.params.id;
  arrayRemove(usersDB, id);
  res.json({id: id, action: 'delete'});
});

module.exports = users;
