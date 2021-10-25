import { CHART_BACKGROUND_COLOR, CHART_BORDER_COLOR, CHART_LABEL_COLOR } from '../utils/constants';

const hourlyLineChartData = (hours, temperatures) => ({
  labels: hours,
  datasets: [
    {
      label: 'Temperature ℃',
      data: temperatures,
      fill: true,
      backgroundColor: CHART_BACKGROUND_COLOR,
      borderColor: CHART_BORDER_COLOR
    }
  ]
});

const hourlyLineChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        color: CHART_LABEL_COLOR,
        stepSize: 10
      }
    },
    x: {
      ticks: {
        color: CHART_LABEL_COLOR
      }
    }
  }
};

export { hourlyLineChartData, hourlyLineChartOptions };
