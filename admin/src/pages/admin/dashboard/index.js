import React, {useState} from 'react';


//IMPORTS MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

import ReactMapGL from 'react-map-gl';

import Chart from './chart';

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
      overflow: 'auto',
    },
    container: {
      margin: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(3),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
  }));

export default function Dashboard() {
  const classes = useStyles();

    //MapBox
    const [viewport, setViewport] = useState({
      width: 730,
      height: 700,
      latitude: -21.1767,
      longitude: -47.8208,
      zoom: 10
    });

  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <MenuAdmin title={'Dashboard'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Paper>
              <ReactMapGL
                  {...viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                  onViewportChange={nextViewport => setViewport(nextViewport)}
                  mapStyle='mapbox://styles/yanpina/cku4pfpr80xvp17qonyh9oevt'
              />
            </Paper>

            <Paper>
              <Chart />
            </Paper>
          </Grid>

          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}