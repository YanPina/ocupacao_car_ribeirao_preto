import React, {useEffect} from 'react';

import api from '../../../services/api';

//CHARTS
import Chart from "react-apexcharts"
import chartOptions from './options_chart';


export default function ChartRibPreto() {

  //Biomassas
  const safrasRibpreto = [];
  const seriesRibpreto = [];

  
  useEffect(() => {
    // Biomassas
    api.get('/api/biomassas/regiao/RIB.PRETO').then(response => {
      const RibPreto = response.data.map((item) => {
        safrasRibpreto.push(item)
      })
      for(var item in safrasRibpreto){
        seriesRibpreto.push(
        {
          name: `Safra ${safrasRibpreto[item].safra}`,
          data: [safrasRibpreto[item].set, safrasRibpreto[item].out, safrasRibpreto[item].nov, safrasRibpreto[item].dez, safrasRibpreto[item].jan, safrasRibpreto[item].fev, safrasRibpreto[item].mar, safrasRibpreto[item].abr, safrasRibpreto[item].mai, safrasRibpreto[item].jun, safrasRibpreto[item].jul, safrasRibpreto[item].ago]
        },
        )
      }
    })
  },[])

  return (
        <Chart 
            options={chartOptions.options}
            height={350}
            width={400}
        />
  )
}