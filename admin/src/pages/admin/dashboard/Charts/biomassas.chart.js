import React, {useEffect} from 'react';

import api from '../../../../services/api';

//CHARTS
import Chart from "react-apexcharts"
import biomassaoptionscentrosul from '../Options/biomassas.options';


export default function BiomassaChartCentroSul() {

  //Biomassas
  const safrasCentroSul = [];
  const seriesCentroSul = [];

  
  useEffect(() => {
    // Biomassas
    api.get('/api/biomassas/regiao/CENTRO SUL').then(response => {
      const centrosul = response.data.map((item) => {
        safrasCentroSul.push(item)
      })
      for(var item in safrasCentroSul){
        seriesCentroSul.push(
        {
          name: `Safra ${safrasCentroSul[item].safra}`,
          data: [safrasCentroSul[item].set, safrasCentroSul[item].out, safrasCentroSul[item].nov, safrasCentroSul[item].dez, safrasCentroSul[item].jan, safrasCentroSul[item].fev, safrasCentroSul[item].mar, safrasCentroSul[item].abr, safrasCentroSul[item].mai, safrasCentroSul[item].jun, safrasCentroSul[item].jul, safrasCentroSul[item].ago]
        },
        )
      }
    })
  },[])

  return (
        <Chart 
            options={biomassaoptionscentrosul.options}
            series={seriesCentroSul}
            height={550}
            width={1200}
        />
  )
}