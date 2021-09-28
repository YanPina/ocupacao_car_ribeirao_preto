import React from 'react';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


//IMPORTS ADMIN
import Dasboard from './pages/admin/dashboard/index'
import Login from './pages/admin/login/index'

//IMPORTS USERS
import Users from './pages/admin/users/index';
import EditUsers from './pages/admin/users/edit.users';
import CreateUsers from './pages/admin/users/create.users';

import PrivateRoute from './services/wAuth';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                {/* Routes Admin */}
                <PrivateRoute path='/' exact component={Dasboard} />
                <PrivateRoute path='/admin' exact component={Dasboard} />
                <Route path='/admin/login' exact component={Login} />


                                        {/* Routes Users */}
                <PrivateRoute path='/admin/users' exact component={Users} />
                <PrivateRoute path='/admin/users/cadastrar' exact component={CreateUsers} />
                <PrivateRoute path='/admin/users/editar/:id' exact component={EditUsers} />

            </Switch>
        </BrowserRouter>
    )
}