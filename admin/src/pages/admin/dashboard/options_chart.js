const chartOptions = {
    options: {
        chart: {
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Cricket'],
        title: {
          text: 'OCUPAÇÃO DE CAR - RIBEIRÃO PRETO',
          align: 'left',
        },
        yaxis: {title: {text: 'PERCENTUAL DE OCUPAÇÃO DE CAR'}},
        dataLabels: {
          enabled:true,
          style: {fontSize: '10px', fontWeight: 'bold'},
          background: {enabled: false}
        },
        xaxis: {
          categories: ['Percentual de Ocupação Total', 'Percentual de Ocupação Ativos'],
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        legend: {
          position: 'bottom',
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {colors: ['#f3f3f3', 'transparent'],opacity: 0.5},
        },
      }
}

export default chartOptions;

