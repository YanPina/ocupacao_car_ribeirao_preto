const chartOptions = {
    options: {
        colors: ['#00ff0d', '#1f1745', '#ff0000', '#fff152', '#00ccff', '#3043d1', '#01020a'],
        chart: {
          type: 'bar',
          width:'100%'
        },
        labels: ['Área Imóvel', 'Área de Preservação', 'Reserva Legal', 'Vegetação Nativa', 'Hidrografia', 'Área Consolidada', 'Uso Restrito'],
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
        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#000000"]
          }
        },
        title: {
          text: 'OCUPAÇÃO DE ÁREAS DE CAR - RIBEIRÃO PRETO',
          align: 'center',
        },
        yaxis: {title: {text: 'PERCENTUAL DE OCUPAÇÃO DE CAR'}},
      }
}

export default chartOptions;

