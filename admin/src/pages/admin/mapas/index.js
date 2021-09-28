import React from 'react';

//IMPORTS MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

            //MAPAS
//Ribeirão Preto
import MapRibPreto from './data/MapRibPreto';

//ARACATUBA
import MapPiracicaba from './data/MapPiracicaba';

//PIRACICABA
import MapAracatuba from './data/MapAracatuba';



const useStyles = makeStyles((theme) => ({
    root: {
      margin: 0,
      display: 'flex',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      width: '100vw',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(1.5),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
  }));

export default function Mapas() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <MenuAdmin title={'Mapas'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>

            <Grid item>
              <Paper elevation={3} className={classes.paper}>
                <MapRibPreto/>
              </Paper>
            </Grid>

            <Grid item >
              <Paper elevation={3} className={classes.paper}>
                <MapPiracicaba />
              </Paper>
            </Grid>
              
            <Grid item >
              <Paper elevation={3} className={classes.paper}>
                <MapAracatuba />
              </Paper>
            </Grid>
          
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}