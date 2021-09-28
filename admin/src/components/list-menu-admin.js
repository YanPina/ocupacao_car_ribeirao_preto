import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { getToken, logout } from '../services/auth';
import api from '../services/api';


export const mainListItems = (
  <div>
    <ListItem button component='a' href='/admin' >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>

    <ListItem button component='a' href='/admin/users' >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>

    <ListItem button onClick={confirmExit} >
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);

async function confirmExit(){
  if(window.confirm("Deseja realmente sair?")){
    const response = await api.get("/api/users/destroytoken",{headers:{token:getToken()}});
    if(response.status===200){
      logout();
      window.location.href = '/admin/login'
    }else{
      alert('Não foi possível fazer logout');
    }
  }
}