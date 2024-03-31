export const ChartOptionConfig = {
  type: 'bar',
  height: 240,
  series: [
    {
      name: 'Revenue (last 7 days)',
      data: [] as number[]
    }
  ],
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    title: {
      show: ''
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#020617'],
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 2
      }
    },
    xaxis: {
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400
        }
      },
      categories: [] as string[]
    },
    yaxis: {
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#dddddd',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 5,
        right: 20
      }
    },
    fill: {
      opacity: 0.8
    },
    tooltip: {
      theme: 'dark'
    }
  }
}
