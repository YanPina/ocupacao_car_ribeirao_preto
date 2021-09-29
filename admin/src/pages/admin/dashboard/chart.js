import React, {useEffect} from 'react';

import api from '../../../services/api';

//CHARTS
import Chart from "react-apexcharts"
import chartOptions from './options_chart';

export default function ChartRibPreto() {

  //Biomassas
  const carRibpreto = [];
  const seriesRibpreto = [];

  
  useEffect(() => {
    // Biomassas
    api.get('/api/car').then(response => {
      const RibPreto = response.data.map((item) => {
        carRibpreto.push(item)
      })
      for(var item in carRibpreto){
        seriesRibpreto.push(
        {
          name: `Car ${carRibpreto[item].car}`,
          data: [carRibpreto[item].area_km2, carRibpreto[item].percentual,carRibpreto[item]]
        },
        )
      }
    })
  },[])

  return (
        <Chart
            series={seriesRibpreto}
            options={chartOptions.options}
            height={350}
            width={400}
        />
  )
}