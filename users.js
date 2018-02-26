const express = require('express');

const userManager = express();
const roles = require('./roles'); // '.js' is not necessary (but I prefer)

let users = [];

let idCounter = 0;

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

userManager.use(logger); // the function is used by userManager with the help of 'use()' method

userManager.use('/roles', roles); // using exported module 'roles', mounted under '/roles', so it is not necessary to use in roles.js

const arrayRemove = (array, valueToRemove) => {
  let index = array.indexOf(valueToRemove);
  array.splice(index, 1);
};

userManager.get('/policy/*', (req, res, next) => {
  console.log('Policy page');
  next();
});

userManager.get('/policy/company', (req, res) => {
  res.json({content: 'lorem ipsum'});
});

// USERS
userManager.get('/users', (req, res) => {
  res.json(users);
});

userManager.post('/users/create', (req, res) => {
  debugger;
  let username = req.query.username;
  let userObject = {
    id: idCounter,
    username: username
  };
  users.push(userObject);
  idCounter++;
  res.json({action: 'create', success: true, object: userObject});
});

userManager.get('/users/:id', (req, res) => {
  let id = req.params.id;
  res.json({ // sends back a json file which contains the input argument. / res.send('valami') --> this returns the string 'valami'
    id: id, action: 'show'});
});

userManager.get('/users/new', (req, res) => {
  res.json({action: 'new'});
});

userManager.get('/users/:id/edit', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'edit'});
});

// I would use PUT here.
userManager.put('/users/:id/update', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update'});
});

// I would use DELETE here.
userManager.delete('/users/:id/delete', (req, res) => {
  let id = req.params.id;
  arrayRemove(users, id);
  res.json({id: id, action: 'delete'});
});

// LISTENER
userManager.listen(8080, () => {
  console.log('Listening on port 8080');
});
