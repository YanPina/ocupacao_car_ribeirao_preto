import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddIcon from '@material-ui/icons/Add';
import CachedIcon from '@material-ui/icons/Cached';
import DeleteIcon from '@material-ui/icons/Delete';

import api from '../../../services/api';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    table: {
      fontWeight:"bold"
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
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
  }));


export default function Car() {
  const classes = useStyles();

  const [ car, setCar ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  //Vai retornar todas as car cadastrados
  useEffect(() => {
    async function loadCar(){
      const response = await api.get('/api/car');
      setCar(response.data)
      setLoading(false);
    }
    loadCar();
  },[])

  async function handleDelete(id){
    if(window.confirm("Deseja realmente excluir esse Car?")) {
      var result = await api.delete('/api/car/'+id);

      if(result.status === 200){
        window.location.href = '/admin/car';
      }else{
        alert('Ocorreu um erro. Por favor, tente novamente.')
      }
    }
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <MenuAdmin title={'Car'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
            <Button style={{marginBottom:18}} variant='contained' color='primary' href={'/admin/car/create'} >
              <AddIcon />
              Cadastrar Car
            </Button>
              <Paper className={classes.paper}>

                  <h2>Lista de Car</h2>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    
                      <TableContainer component={Paper}>
                        {loading?(<LinearProgress style={{width:'50%', margin:'0 auto'}}  />):(
                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                            <TableRow >
                              <TableCell className={classes.table} align="center">Estado</TableCell>
                              <TableCell className={classes.table} align="center">Município</TableCell>
                              <TableCell className={classes.table} align="center">Car</TableCell>
                              <TableCell className={classes.table} align="center">Área KM2</TableCell>
                              <TableCell className={classes.table} align="center">Percentual de Ocupação</TableCell>
                              <TableCell className={classes.table} align="center">Data de Cadastro</TableCell>
                              <TableCell className={classes.table} align="center">Opções</TableCell>
                            </TableRow>
                          </TableHead>
            
                          <TableBody>

                            {/* Vai mapear todos as Biomassas cadastrados */}
                            {car.map((row) => (
                              <TableRow key={row._id}>
                                <TableCell className={classes.table} component="th" scope="row">
                                  {row.sigla_uf}
                                </TableCell>
                                <TableCell align='center' >{row.nm_mun}</TableCell>
                                <TableCell align='center' >{row.car}</TableCell>
                                <TableCell align='center' >{row.area_km2}</TableCell>
                                <TableCell align='center' >{row.percentual}</TableCell>
                                <TableCell align='center' >{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                                <TableCell>
                                  <ButtonGroup aria-label="outlined primary button group">
                                    <Button style={{marginRight:5}} variant='contained' color='primary' href={'/admin/car/edit/'+row.id} >
                                      <CachedIcon />
                                    </Button>
                                    <Button variant='contained' color='secondary' onClick={() => handleDelete(row.id)} >
                                      <DeleteIcon />
                                    </Button>
                                  </ButtonGroup>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>)}
                      </TableContainer>

                    </Grid>
                  </Grid>
                  
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