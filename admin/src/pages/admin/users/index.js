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
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddIcon from '@material-ui/icons/Add';
import CachedIcon from '@material-ui/icons/Cached';
import DeleteIcon from '@material-ui/icons/Delete';

import api from '../../../services/api';


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
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
  }));


export default function Usuários() {
  const classes = useStyles();

  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  //Vai retornar todos os usuários cadastrados
  useEffect(() => {
    async function loadUsers(){
      const response = await api.get('/api/users');
      setUsers(response.data)
      setLoading(false);
    }
    loadUsers();
  },[])

  async function handleDelete(id){
    if(window.confirm("Deseja realmente excluir esse usuário?")) {
      var result = await api.delete('/api/users/'+id);

      if(result.status === 200){
        window.location.href = '/admin/users';
      }else{
        alert('Ocorreu um erro. Por favor, tente novamente.')
      }
    }
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <MenuAdmin title={'Usuários'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
            <Button style={{marginBottom:18}} variant='contained' color='primary' href={'/admin/users/cadastrar'} >
              <AddIcon />
              Cadastrar
            </Button>
              <Paper className={classes.paper}>

                  <h2>Listagem de Usuários</h2>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    
                      <TableContainer component={Paper}>
                        {loading?(<LinearProgress style={{width:'50%', margin:'0 auto'}}  />):(
                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Usuário</TableCell>
                              <TableCell align="center">Email</TableCell>
                              <TableCell align="center">Tipo</TableCell>
                              <TableCell align="center">Data de Cadastro</TableCell>
                              <TableCell align="center">Opções</TableCell>
                            </TableRow>
                          </TableHead>
            
                          <TableBody>

                            {/* Vai mapear todos os usuários cadastrados */}
                            {users.map((row) => (
                              <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align='center' >{row.email}</TableCell>
                                <TableCell align='center' >
                                  {row.tipo_user===1? 
                                    <Chip
                                      label="Administrador"
                                      color="primary"
                                    /> 
                                    :
                                    <Chip
                                      label="Cliente"
                                      color="secondary"
                                    />
                                  }
                                </TableCell>
                                <TableCell align='center' >{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                                <TableCell>
                                  <ButtonGroup aria-label="outlined primary button group">
                                    <Button style={{marginRight:5}} variant='contained' color='primary' href={'/admin/users/editar/'+row.id} >
                                      <CachedIcon />
                                      Atualizar
                                    </Button>
                                    <Button variant='contained' color='secondary' onClick={() => handleDelete(row.id)} >
                                      <DeleteIcon />
                                      Excluir
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