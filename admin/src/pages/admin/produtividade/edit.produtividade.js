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

export default function EditProdutividade() {
  const classes = useStyles();

  const [regiao, setRegiao] = useState('');
  const [tch, setTCH] = useState('');
  const [abr, setAbr] = useState('');
  const [mai, setMai] = useState('');
  const [jun, setJun] = useState('');
  const [jul, setJul] = useState('');
  const [ago, setAgo] = useState('');
  const [set, setSet] = useState('');
  const [out, setOut] = useState('');
  const [nov, setNov] = useState('');
  const [dez, setDez] = useState('');
  
  const {id} = useParams();

  useEffect(() => {
    async function getProdutividade(){
      var response = await api.get('/api/produtividade/'+id);
      
      setRegiao(response.data.regiao);
      setTCH(response.data.tch);
      setAbr(response.data.abr);
      setMai(response.data.mai);
      setJun(response.data.jun);
      setJul(response.data.jul);
      setAgo(response.data.ago);
      setSet(response.data.set);
      setOut(response.data.out);
      setNov(response.data.nov);
      setDez(response.data.dez);

    }
    getProdutividade();
  },[])
  //Vai receber as informações inseridas pelo usuário
  async function handleSubmit() {

    const data = {
      regiao:regiao,
      tch:tch,
      abr:abr,
      mai:mai,
      jun:jun,
      jul:jul,
      ago:ago,
      set:set,
      out:out,
      nov:nov,
      dez:dez,
    }

    if(regiao!=='' && tch!==''){
      const response = await api.put('/api/produtividade/'+id, data);

      if(response.status===200){
        window.location.href='/admin/produtividade'
      } else{
        alert('Erro ao atualizar o Produtividade!');
      }
    }else{
      alert('Por favor, insira os dados a serem atualizados.')
    }
  }

  return (
    <div className={classes.root}>
      
  
      <MenuAdmin title={'Produtividade Agrícola'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12} >
            <Button style={{marginBottom:18, marginRight:5}} variant='contained' href={'/admin/produtividade'} >
              <ArrowBackIcon />
              Voltar
            </Button>
            <Button style={{marginBottom:18}} variant='contained' color='primary' href={'/admin/produtividade/create'} >
              <AddIcon />
              Cadastrar
            </Button>
            <Paper className={classes.paper}>
                <h2>Editar Produtividade Agrícola</h2>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      required
                      id="regiao"
                      name="regiao"
                      label="Região"
                      fullWidth
                      autoComplete="regiao"
                      value={regiao}
                      onChange={e => setRegiao(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={5}>
                    <TextField
                      required
                      id="tch"
                      name="tch"
                      label="TCH"
                      fullWidth
                      autoComplete="tch"
                      value={tch}
                      onChange={e => setTCH(e.target.value)}
                    />
                  </Grid>
                </Grid>


                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="abr"
                            name="abr"
                            label="Abri"
                            fullWidth
                            autoComplete="abr"
                            value={abr}
                            onChange={e => setAbr(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="mai"
                            name="mai"
                            label="Mai"
                            fullWidth
                            autoComplete="mai"
                            value={mai}
                            onChange={e => setMai(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="jun"
                            name="jun"
                            label="Jun"
                            fullWidth
                            autoComplete="jun"
                            value={jun}
                            onChange={e => setJun(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="jul"
                            name="jul"
                            label="Jul"
                            fullWidth
                            autoComplete="jul"
                            value={jul}
                            onChange={e => setJul(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="ago"
                            name="ago"
                            label="Ago"
                            fullWidth
                            autoComplete="ago"
                            value={ago}
                            onChange={e => setAgo(e.target.value)}
                        />
                    </Grid>


                
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="set"
                            name="set"
                            label="Set"
                            fullWidth
                            autoComplete="set"
                            value={set}
                            onChange={e => setSet(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="out"
                            name="out"
                            label="Out"
                            fullWidth
                            autoComplete="out"
                            value={out}
                            onChange={e => setOut(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="nov"
                            name="nov"
                            label="Nov"
                            fullWidth
                            autoComplete="nov"
                            value={nov}
                            onChange={e => setNov(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            id="dez"
                            name="dez"
                            label="Dez"
                            fullWidth
                            autoComplete="dez"
                            value={dez}
                            onChange={e => setDez(e.target.value)}
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