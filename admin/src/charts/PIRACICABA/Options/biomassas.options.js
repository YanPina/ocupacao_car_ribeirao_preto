const biomassasOptions = {
    
    options: {
        colors: ['#0000ff', '#ffff00','#dc0000','#6b7e00','#0e0091'],
        title: {
            text: 'NÍVEIS DE BIOMASSA - REGIÃO DE PIRACICABA',
            align: 'left',
        },
        yaxis: {title: {text: 'NÍVES DE BIOMASSA'}},
        dataLabels: {
            enabled:true,
            style: {fontSize: '10px', fontWeight: 'bold'},
            background: {enabled: false}
        },
        stroke: {
            curve: 'straight', 
            width: 2,
            dashArray: 0
        },
        xaxis: {
            categories: ['Set', 'Out', 'Nov','Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago']
        },
        legend: {position: 'bottom'},
        grid: {
            borderColor: '#e7e7e7',
            row: {colors: ['#f3f3f3', 'transparent'],opacity: 0.5},
        },
    }
}

export default biomassasOptions;