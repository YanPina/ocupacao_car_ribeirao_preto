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

export default function EditBiomassa() {
  const classes = useStyles();

  const [regiao, setRegiao] = useState('');
  const [safra, setSafra] = useState('');
  const [set, setSet] = useState('');
  const [out, setOut] = useState('');
  const [nov, setNov] = useState('');
  const [dez, setDez] = useState('');
  const [jan, setJan] = useState('');
  const [fev, setFev] = useState('');
  const [mar, setMar] = useState('');
  const [abr, setAbr] = useState('');
  const [mai, setMai] = useState('');
  const [jun, setJun] = useState('');
  const [jul, setJul] = useState('');
  const [ago, setAgo] = useState('');
  

  const {id} = useParams();

  useEffect(() => {
    async function getBiomassa(){
      var response = await api.get('/api/biomassas/'+id);
      
      setRegiao(response.data.regiao);
      setSafra(response.data.safra);
      setSet(response.data.set);
      setOut(response.data.out);
      setNov(response.data.nov);
      setDez(response.data.dez);
      setJan(response.data.jan);
      setFev(response.data.fev);
      setMar(response.data.mar);
      setAbr(response.data.abr);
      setMai(response.data.mai);
      setJun(response.data.jun);
      setJul(response.data.jul);
      setAgo(response.data.ago);

    }
    getBiomassa();
  },[])
  //Vai receber as informações inseridas pelo usuário
  async function handleSubmit() {

    const data = {
      regiao:regiao,
      safra:safra,
      set:set,
      out:out,
      nov:nov,
      dez:dez,
      jan:jan,
      fev:fev,
      mar:mar,
      abr:abr,
      mai:mai,
      jun:jun,
      jul:jul,
      ago:ago
    }

    if(regiao!=='' && safra!==''){
      const response = await api.put('/api/biomassas/'+id, data);

      if(response.status===200){
        window.location.href='/admin/biomassas'
      } else{
        alert('Erro ao atualizar o Biomassa!');
      }
    }else{
      alert('Por favor, insira os dados a serem atualizados.')
    }
  }

  return (
    <div className={classes.root}>
      
  
      <MenuAdmin title={'Biomassas'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12} >
            <Button style={{marginBottom:18, marginRight:5}} variant='contained' href={'/admin/biomassas'} >
              <ArrowBackIcon />
              Voltar
            </Button>
            <Button style={{marginBottom:18}} variant='contained' color='primary' href={'/admin/biomassas/create'} >
              <AddIcon />
              Cadastrar
            </Button>
              <Paper className={classes.paper}>
                <h2>Atualizar Biomassa</h2>
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
                      id="safra"
                      name="safra"
                      label="Safra"
                      fullWidth
                      autoComplete="safra"
                      value={safra}
                      onChange={e => setSafra(e.target.value)}
                    />
                  </Grid>
                </Grid>
                
                <Grid container spacing={3}>
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

                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="jan"
                      name="jan"
                      label="Jan"
                      fullWidth
                      autoComplete="jan"
                      value={jan}
                      onChange={e => setJan(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="fev"
                      name="fev"
                      label="Fev"
                      fullWidth
                      autoComplete="fev"
                      value={fev}
                      onChange={e => setFev(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="mar"
                      name="mar"
                      label="Mar"
                      fullWidth
                      autoComplete="mar"
                      value={mar}
                      onChange={e => setMar(e.target.value)}
                    />
                  </Grid>

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