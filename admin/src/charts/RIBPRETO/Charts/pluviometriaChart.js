import React, { useEffect } from 'react';

import api from '../../../services/api';


//CHARTS
import Chart from "react-apexcharts"
import pluviometriasoptionsRibpreto from '../Options/pluviometrias.options';


export default function PluviometriaChartRibPreto() {

  //Pluviometrias
  const pluviometrias = [];
  const seriespluviometrias = []

  useEffect(() => {
    //Pluviometrias
    api.get('/api/pluviometrias/regiao/RIB.PRETO').then(response => {
        const RibPreto = response.data.map((item) => {
          pluviometrias.push(item)
        })
        for(var item in pluviometrias){
          seriespluviometrias.push(
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
            options={pluviometriasoptionsRibpreto.options}
            series={seriespluviometrias}
            type='bar'
            height={300}
            width={500}
        />
  )
}