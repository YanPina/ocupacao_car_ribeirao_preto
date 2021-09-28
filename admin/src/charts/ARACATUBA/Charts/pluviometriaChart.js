import React, { useEffect } from 'react';

import api from '../../../services/api';

//CHART
import Chart from "react-apexcharts"
import pluviometriaOptions from '../Options/pluviometriasOptions';

export default function Aracatuba() {

  //Pluviometrias
  const pluviometrias = [];
  const series = []
  
  useEffect(() => {

    //Pluviometrias
    api.get('/api/pluviometrias/regiao/ARAÇATUBA').then(response => {
      const RibPreto = response.data.map((item) => {
        pluviometrias.push(item)
      })
      for(var item in pluviometrias){
        series.push(
        {
          name: `Safra ${pluviometrias[item].safra}`,
          data: [pluviometrias[item].set, pluviometrias[item].out, pluviometrias[item].nov, pluviometrias[item].dez, pluviometrias[item].jan, pluviometrias[item].fev, pluviometrias[item].mar, pluviometrias[item].abr, pluviometrias[item].mai, pluviometrias[item].jun, pluviometrias[item].jul, pluviometrias[item].ago]
        },
        )
      }
    })
  },[])

  return (
    <Chart 
        options={pluviometriaOptions.options}
        series={series}
        height={350}
        width={500}
        type = 'bar'
    />
  )
}