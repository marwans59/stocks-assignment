Highcharts.chart('stockGraphContainer', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'AAPL'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['10:00', '10:20', '10:40', '11:00']
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'AAPL',
    data: [252.90, 254, 253.5, 253.45]
  }]
});