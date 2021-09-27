import classes from './HourlyForecastChart.module.scss';
import { Line } from 'react-chartjs-2';

function HourlyForecastChart() {
  const data = {
    labels: ['12:00', '15:00', '18:00', '21:00', '00:00', '03:00', '06:00', '09:00'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 23, 23, 18, 13, 12, 11, 13],
        fill: true,
        backgroundColor: 'rgb(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            // beginAtZero: true
          }
        }
      ]
    }
  };

  return <Line type="basic" data={data} options={options} />;
}

export default HourlyForecastChart;
