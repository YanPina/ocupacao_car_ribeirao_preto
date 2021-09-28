const pluviometriasOptions = {
    
    options: {
        title: {
            text: 'PRECIPITAÇÃO MENSAL DA FORMAÇÃO DAS SAFRAS',
            align: 'left'
        },
        colors: ['#64b4ff', '#ffbe1a', '#1a63ff'],
        chart: {
          type: 'bar',
          width:'100%'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '100%',
            endingShape: 'rounded'
          },
        },
        plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
        },
        dataLabels: {
            enabledOnSeries: [2],
            enabled: true,
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#000000"]
            }
          },
        stroke: {
          show: true,
        },
        xaxis: {
          categories: ['Set', 'Out', 'Nov','Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago'],
        },
        yaxis: {
          title: {
            text: 'Precipitação (mm)'
          }
        }
    }
}

export default pluviometriasOptions;