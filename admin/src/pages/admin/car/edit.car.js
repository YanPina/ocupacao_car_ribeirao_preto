import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

// MATERIAL UI IMPORTS 

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';


import MenuAdmin from '../../../components/menu-admin'
import Footer from '../../../components/footer-admin'
import api from '../../../services/api';


// CSS
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 1,
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
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    formControl: {
      width: '100%'
    },
    btnSuccess:{
      backgroundColor:"green",
      color:"#fff",
      "&:hover":{backgroundColor:"#12b912"}
    }


  }));

export default function EditCar() {
  const classes = useStyles();

  const [sigla_uf, setSigla_uf] = useState('');
  const [nm_mun, setNm_mun] = useState('');
  const [car, setCar] = useState();
  const [area_km2, setArea_km2] = useState();
  const [percentual, setPercentual] = useState();

  
  const {id} = useParams();

  useEffect(() => {
    async function getCar(){
      var response = await api.get('/api/car/'+id);
      
      setSigla_uf(response.data.sigla_uf);
      setNm_mun(response.data.nm_mun);
      setCar(response.data.car);
      setArea_km2(response.data.area_km2);
      setPercentual(response.data.percentual);
    }
    getCar();
  },[])
  //Vai receber as informações inseridas pelo usuário
  async function handleSubmit() {

    const data = {
        sigla_uf:sigla_uf,
        nm_mun:nm_mun,
        car:car,
        area_km2:area_km2,
        percentual:percentual,
    }

    if(sigla_uf!=='' && nm_mun!==''){
      const response = await api.put('/api/car/'+id, data);

      if(response.status===200){
        window.location.href='/admin/car'
      } else{
        alert('Erro ao atualizar o Car!');
      }
    }else{
      alert('Por favor, insira os dados a serem atualizados.')
    }
  }

  return (
    <div className={classes.root}>
      
  
      <MenuAdmin title={'Car'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12} >
            <Button style={{marginBottom:18, marginRight:5}} variant='contained' href={'/admin/car'} >
              <ArrowBackIcon />
              Voltar
            </Button>
            <Button style={{marginBottom:18}} variant='contained' color='primary' href={'/admin/car/create'} >
              <AddIcon />
              Cadastrar
            </Button>
              <Paper className={classes.paper}>
                <h2>Atualizar CAR</h2>
                <Grid container spacing={4}>

                  <Grid item xs={12} sm={5}>
                    <TextField
                      required
                      id="sigla_uf"
                      name="sigla_uf"
                      label="Estado"
                      fullWidth
                      autoComplete="sigla_uf"
                      value={sigla_uf}
                      onChange={e => setSigla_uf(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={5}>
                    <TextField
                      required
                      id="nm_mun"
                      name="nm_mun"
                      label="Município"
                      fullWidth
                      autoComplete="nm_mun"
                      value={nm_mun}
                      onChange={e => setNm_mun(e.target.value)}
                    />
                  </Grid>
                </Grid>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="car"
                      name="car"
                      label="Car"
                      fullWidth
                      autoComplete="car"
                      value={car}
                      onChange={e => setCar(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="area_km2"
                      name="area_km2"
                      label="Área KM2"
                      fullWidth
                      autoComplete="area_km2"
                      value={area_km2}
                      onChange={e => setArea_km2(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="percentual"
                      name="percentual"
                      label="Percentual de Ocupação"
                      fullWidth
                      autoComplete="percentual"
                      value={percentual}
                      onChange={e => setPercentual(e.target.value)}
                    />
                  </Grid>

                <Grid item xs={12} sm={12}>
                  <Button onClick={handleSubmit} variant="contained" className={classes.btnSuccess} >
                    <SaveIcon />
                    Salvar
                  </Button>
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