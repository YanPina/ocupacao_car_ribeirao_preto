import React from 'react';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


//IMPORTS ADMIN
import Dasboard from './pages/admin/dashboard/index'
import Mapas from './pages/admin/mapas/index';
import Login from './pages/admin/login/index'

//IMPORTS USERS
import Users from './pages/admin/users/index';
import EditUsers from './pages/admin/users/edit.users';
import CreateUsers from './pages/admin/users/create.users';

//IMPORTS CLIENT


//IMPORTS BIOMASSA
import Biomassas from './pages/admin/biomassas/index';
import EditBiomassa from './pages/admin/biomassas/edit.biomassas';
import CreateBiomassa from './pages/admin/biomassas/create.biomassas';


//IMPORTS PLUVIOMETRIAS
import Pluviometria from './pages/admin/pluviometrias/index';
import CreatePluviometria from './pages/admin/pluviometrias/create.pluviometria';
import EditPluviometria from './pages/admin/pluviometrias/edit.pluviometrias';



//IMPORTS PRODUTIVIDADE AGRÍCOLA
import Produtividade from './pages/admin/produtividade/index';
import CreateProdutividade from './pages/admin/produtividade/create.produtividade';
import EditProdutividade from  './pages/admin/produtividade/edit.produtividade';


//IMPORTS REGIÕES SP
import RIBPRETO from './charts/RIBPRETO/index';
import PIRACICABA from './charts/PIRACICABA/index';
import ARACATUBA from './charts/ARACATUBA/index';



//IMPORTS CENTRO SUL
import CENTROSUL from './pages/admin/dashboard/Charts/biomassas.chart';


import PrivateRoute from './services/wAuth';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                {/* Routes Admin */}
                <PrivateRoute path='/' exact component={Dasboard} />
                <PrivateRoute path='/admin' exact component={Dasboard} />
                <PrivateRoute path='/admin/mapas' exact component={Mapas} />
                <Route path='/admin/login' exact component={Login} />


                                        {/* Routes Users */}
                <PrivateRoute path='/admin/users' exact component={Users} />
                <PrivateRoute path='/admin/users/cadastrar' exact component={CreateUsers} />
                <PrivateRoute path='/admin/users/editar/:id' exact component={EditUsers} />

                                        {/* Routes Biomassas */}
                <PrivateRoute path='/admin/biomassas' exact component={Biomassas} />
                <PrivateRoute path='/admin/biomassas/create' exact component={CreateBiomassa} />
                <PrivateRoute path='/admin/biomassas/edit/:id' exact component={EditBiomassa} />


                                        {/* Routes Pluviometrias */}
                <PrivateRoute path='/admin/pluviometrias' exact component={Pluviometria} />
                <PrivateRoute path='/admin/pluviometrias/create' exact component={CreatePluviometria} />
                <PrivateRoute path='/admin/pluviometrias/edit/:id' exact component={EditPluviometria} />

                                        {/* Routes Produtividade */}
                <PrivateRoute path='/admin/produtividade' exact component={Produtividade} />
                <PrivateRoute path='/admin/produtividade/create' exact component={CreateProdutividade} />
                <PrivateRoute path='/admin/produtividade/edit/:id' exact component={EditProdutividade} />




                                        {/* Routes REGIÕES SP */}
                <PrivateRoute path='/admin/ribpreto' exact component={RIBPRETO} />
                <PrivateRoute path='/admin/piracicaba' exact component={PIRACICABA} />
                <PrivateRoute path='/admin/aracatuba' exact component={ARACATUBA} />

                                        {/* Routes REGIÕES SP */}
                <PrivateRoute path='/admin/centrosul' exact component={CENTROSUL} />

            </Switch>
        </BrowserRouter>
    )
}