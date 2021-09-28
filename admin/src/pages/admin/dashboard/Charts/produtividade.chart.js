import React, {useEffect} from 'react';

import api from '../../../../services/api';

//CHARTS
import Chart from "react-apexcharts"
import produtividadeoptionscentrosul from '../Options/produtividade.options';


export default function ProdutividadeChartCentroSul() {

  //Biomassas
  const tchCentroSul = [];
  const seriesCentroSul = [];

  
  useEffect(() => {
    // Biomassas
    api.get('/api/produtividade/regiao/CENTRO SUL').then(response => {
      const centrosul = response.data.map((item) => {
        tchCentroSul.push(item)
      })
      for(var item in tchCentroSul){
        seriesCentroSul.push(
        {
          name: tchCentroSul[item].tch,
          data: [tchCentroSul[item].abr, tchCentroSul[item].mai, tchCentroSul[item].jun, tchCentroSul[item].jul, tchCentroSul[item].ago, tchCentroSul[item].set, tchCentroSul[item].out, tchCentroSul[item].nov, tchCentroSul[item].dez]
        },
        )
      }
    })
  },[])

  return (
        <Chart 
            options={produtividadeoptionscentrosul.options}
            series={seriesCentroSul}
            height={550}
            width={1200}
        />
  )
}