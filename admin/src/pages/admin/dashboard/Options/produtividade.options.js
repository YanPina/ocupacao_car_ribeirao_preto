const biomassasOptions = {
    
    options: {
        colors: ['#0000ff', '#ffff00','#dc0000','#6b7e00','#0e0091'],
        title: {
            text: 'Produtividade Agrícula Acumulada - TCH Realizado - Centro Sul',
            align: 'center',
        },
        yaxis: {title: {text: 'Produtividade Agrícola Acumulada (t/ha)'}},
        dataLabels: {
            enabled:true,
            style: {fontSize: '12px', fontWeight: 'bold'},
            background: {
                enabled: true,
                foreColor: '#fff',
                padding: 4,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#fff',
                opacity: 0.9,
                dropShadow: {
                  enabled: false,
                  top: 1,
                  left: 1,
                  blur: 1,
                  color: '#000',
                  opacity: 0.45
                }
              },
        },
        stroke: {
            curve: 'straight', 
            width: 4,
            dashArray: 0
        },
        xaxis: {
            categories: ['Set', 'Out', 'Nov','Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago']
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

export default biomassasOptions;