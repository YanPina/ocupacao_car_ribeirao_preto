const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./controllers/UserController');

//Routes User
routes.get('/api/users', UserController.index);
routes.post('/api/users', UserController.create);
routes.put('/api/users/:id', UserController.update);
routes.post('/api/users/login', UserController.login);
routes.delete('/api/users/:id', UserController.delete);
routes.get('/api/users.details/:id', UserController.details);
routes.get('/api/users/checktoken', UserController.checkToken);
routes.get('/api/users/destroytoken', UserController.destroyToken);


module.exports = routes;
