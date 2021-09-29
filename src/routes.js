const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./controllers/UserController');
const CarController = require('./controllers/CarController');

//Routes User
routes.get('/api/users', UserController.index);
routes.post('/api/users', UserController.create);
routes.put('/api/users/:id', UserController.update);
routes.post('/api/users/login', UserController.login);
routes.delete('/api/users/:id', UserController.delete);
routes.get('/api/users.details/:id', UserController.details);
routes.get('/api/users/checktoken', UserController.checkToken);
routes.get('/api/users/destroytoken', UserController.destroyToken);


//Routes CAR
routes.get('/api/car', CarController.index);
routes.post('/api/car', CarController.create);
routes.put('/api/car/:id', CarController.update);
routes.get('/api/car/:id', CarController.details);
routes.delete('/api/car/:id', CarController.delete);




module.exports = routes;
