const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./controllers/UserController');
const BiomassasController = require('./controllers/BiomassasController');
const PluviometriasController = require('./controllers/PluviometriasController')
const ProdutividadeController = require('./controllers/ProdutividadeController')


//Routes User
routes.get('/api/users', UserController.index);
routes.post('/api/users', UserController.create);
routes.put('/api/users/:id', UserController.update);
routes.post('/api/users/login', UserController.login);
routes.delete('/api/users/:id', UserController.delete);
routes.get('/api/users.details/:id', UserController.details);
routes.get('/api/users/checktoken', UserController.checkToken);
routes.get('/api/users/destroytoken', UserController.destroyToken);

//Routes Biomassas
routes.get('/api/biomassas', BiomassasController.index);
routes.post('/api/biomassas', BiomassasController.create);
routes.put('/api/biomassas/:id', BiomassasController.update);
routes.get('/api/biomassas/:id', BiomassasController.details);
routes.get('/api/biomassas/regiao/:regiao', BiomassasController.regiao);
routes.delete('/api/biomassas/:id', BiomassasController.delete);

//Routes Níveis de Precipitação
routes.get('/api/pluviometrias', PluviometriasController.index);
routes.post('/api/pluviometrias', PluviometriasController.create);
routes.put('/api/pluviometrias/:id', PluviometriasController.update);
routes.get('/api/pluviometrias/:id', PluviometriasController.details);
routes.get('/api/pluviometrias/regiao/:regiao', PluviometriasController.regiao);
routes.delete('/api/pluviometrias/:id', PluviometriasController.delete);


//Routes Produtividade Agrícola
routes.get('/api/produtividade', ProdutividadeController.index);
routes.post('/api/produtividade', ProdutividadeController.create);
routes.put('/api/produtividade/:id', ProdutividadeController.update);
routes.get('/api/produtividade/:id', ProdutividadeController.details);
routes.get('/api/produtividade/regiao/:regiao', ProdutividadeController.regiao);
routes.delete('/api/produtividade/:id', ProdutividadeController.delete);

module.exports = routes;
