const chartOptions = {
    options: {
        colors: ['#00ff0d', '#1f1745', '#ff0000'],
        chart: {
          type: 'bar',
          width:'100%'
        },
        labels: ['Ocupação Total', 'Ocupação Ativos', 'Ocupação Cancelados'],
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%"
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '100%',
            endingShape: 'rounded',
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        title: {
          text: 'OCUPAÇÃO DE CAR - RIBEIRÃO PRETO',
          align: 'left',
        },
        yaxis: {title: {text: 'PERCENTUAL DE OCUPAÇÃO DE CAR'}},
      }
}

export default chartOptions;

