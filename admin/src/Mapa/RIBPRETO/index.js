import React from 'react';

//IMPORTS MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../components/menu-admin';
import Footer from '../../components/footer-admin';


//Map
import MapRibPreto from './Map/MapRibPreto';


//CSS
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    margin: 0,
    width: '100vw',
    overflow: 'auto',
  },
  container: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1.5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  papermap: {
    padding: theme.spacing(0.5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));


export default function RibPreto() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <CssBaseline />
  
      <MenuAdmin title={'Ribeirão Preto'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={2}>

            <Grid item>
              {/* Mapa */}
              <Paper elevation={3} className={classes.papermap}>
                <MapRibPreto />
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