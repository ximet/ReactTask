const hourlyLineChartData = (hours, temperatures) => ({
  labels: hours,
  datasets: [
    {
      label: 'Temperature ℃',
      data: temperatures,
      fill: true,
      backgroundColor: 'rgb(0, 178, 255, 0.5)',
      borderColor: 'rgba(248, 178, 0, 1)'
    }
  ]
});

const hourlyLineChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        color: '#00b2ff',
        stepSize: 10
      }
    },
    x: {
      ticks: {
        color: '#00b2ff'
      }
    }
  }
};

export { hourlyLineChartData, hourlyLineChartOptions };
