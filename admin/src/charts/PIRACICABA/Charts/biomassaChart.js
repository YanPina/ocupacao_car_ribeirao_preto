import React, {useEffect} from 'react';

import api from '../../../services/api';


//CHARTS
import Chart from "react-apexcharts"
import biomassasoptions from '../Options/biomassas.options';


export default function BiomassaChartPiracicaba() {

  //Biomassas
  const safras = [];
  const series = [];
  
  useEffect(() => {
    //Biomassas
    api.get('/api/biomassas/regiao/PIRACICABA').then(response => {
      const Piracicaba = response.data.map((item) => {
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
        options={biomassasoptions.options}
        series={series}
        height={350}
        width={500}
    />
  )
}