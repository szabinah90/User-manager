const express = require('express');

const index = express();

const roles = require('./controllers/roles.js'); // '.js' is not necessary (but I prefer)
const users = require('./controllers/users.js');

index.use('/roles', roles);
index.use('/users', users);

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

index.use(logger);

// LISTENER
index.listen(8080, () => {
  console.log('Listening on port 8080');
});
