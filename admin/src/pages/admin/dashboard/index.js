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

            //CHARTS
import BiomassaChartCentroSul from './Charts/biomassas.chart';
import ProdutividadeCentroSul from './Charts/produtividade.chart';


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


  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <MenuAdmin title={'Dashboard'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid item>
              {/* Chart Biomassa */}
              <Paper elevation={3} className={classes.paper}>
                <BiomassaChartCentroSul />
              </Paper>
            </Grid>
            <Grid item>
              {/* Chart Biomassa */}
              <Paper elevation={3} className={classes.paper}>
                <ProdutividadeCentroSul />
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