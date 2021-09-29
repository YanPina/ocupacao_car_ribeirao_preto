import React, {useEffect} from 'react';

import api from '../../../services/api';

//CHARTS
import Chart from "react-apexcharts"
import chartOptions from './options_chart';

export default function ChartRibPreto() {

  //CAR RIBEIRÃO PRETO
  const carRibpreto = [];
  const seriesRibpreto = []

  
  useEffect(() => {
    //CAR RIBEIRÃO PRETO
    api.get('/api/car').then(response => {
      const RibPreto = response.data.map((item) => {
        carRibpreto.push(item)
      })
      for(var item in carRibpreto){
        seriesRibpreto.push({
          name: carRibpreto[item].car,
          data: [carRibpreto[item].percentual]
        }
          
        )
      }
    })
  },[])

  return (
        <Chart
            series={seriesRibpreto}
            options={chartOptions.options}
            type='bar'
            height={450}
            width={510}
        />
  )
}