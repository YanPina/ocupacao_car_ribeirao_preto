const chartOptions = {
    options: {
        colors: ['#00ff0d', '#1f1745', '#ff0000', '#00ccff'],
        chart: {
          type: 'bar',
          width:'100%'
        },
        labels: ['Ocupação Total', 'Área de Preservação', 'Reserva Legal', 'Vegetação Nativa'],
        dataLabels: {
          style: {
            fontSize: '12px',
            colors: ["#000000"]
          },
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
          text: 'OCUPAÇÃO DE ÁREAS DE CAR - RIBEIRÃO PRETO',
          align: 'left',
        },
        yaxis: {title: {text: 'PERCENTUAL DE OCUPAÇÃO DE CAR'}},
      }
}

export default chartOptions;

