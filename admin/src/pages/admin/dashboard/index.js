import React, {useState, useEffect} from 'react';
import api from '../../../services/api';

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
      width: '100vw',
      overflow: 'auto',
    },
    container: {
      margin: 0,
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
    map: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100vw'
    },
    legend: {
      backgroundColor: '#fff',
      borderRadius: '3px',
      bottom: '30px',
      boxShadow: '0 1px 2px',
      padding: '10px',
      position: 'absolute',
      right: '10px',
      zIndex: 1
    }
  }));

export default function Dashboard() {
  const classes = useStyles();

    //MapBox
    const [viewport, setViewport] = useState({
      width: 730,
      height: 500,
      latitude: -21.1767,
      longitude: -47.8208,
      zoom: 10
    });

      //CAR RIBEIRÃO PRETO
  const carRibpreto = [];
  const seriesRibpreto = []

  
  useEffect(() => {
    //CAR RIBEIRÃO PRETO
    api.get('/api/car').then(response => {
      const RibPreto = response.data.map((item) => {
        carRibpreto.push(item)
      })
      for(var item in carRibpreto){
        seriesRibpreto.push(
          carRibpreto[item].percentual
        )
      }
      console.log(seriesRibpreto)
    })
  },[])

  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <MenuAdmin title={'Dashboard'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>

            <Grid item >
              <Paper elevation={3} className={classes.papermap} >
                  <ReactMapGL
                      {...viewport}
                      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                      onViewportChange={nextViewport => setViewport(nextViewport)}
                      mapStyle='mapbox://styles/yanpina/cku8icem022z917nxu78alak9'
                  />
              </Paper>
            </Grid>
            
            <Grid item >
              <Paper elevation={3} className={classes.paper}>
                <Chart />
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