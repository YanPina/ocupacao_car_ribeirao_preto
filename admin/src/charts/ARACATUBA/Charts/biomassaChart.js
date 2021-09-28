import React, {useEffect} from 'react';

import api from '../../../services/api';


//CHARTS
import Chart from "react-apexcharts"
import biomassasOptions from '../Options/biomassas.options'

export default function Aracatuba() {

  //Biomassas
  const safras = [];
  const series = [];
  
  useEffect(() => {
    //Biomassas
    api.get('/api/biomassas/regiao/ARAÇATUBA').then(response => {
      const Aracatuba = response.data.map((item) => {
        safras.push(item)
      })
      for(var item in safras){
        series.push(
        {
          name: `Safra ${safras[item].safra}`,
          data: [safras[item].set, safras[item].out, safras[item].nov, safras[item].dez, safras[item].jan, safras[item].fev, safras[item].mar, safras[item].abr, safras[item].mai, safras[item].jun, safras[item].jul, safras[item].ago]
        },
        )
      }
    })
  },[])

  return (
    <Chart 
        options={biomassasOptions.options}
        series={series}
        height={350}
        width={500}
    />
  )
}