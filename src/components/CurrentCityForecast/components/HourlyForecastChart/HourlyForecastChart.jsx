import { Line } from 'react-chartjs-2';
import hourlyForecastData from './mockData';

function HourlyForecastChart() {
  const { hours, temperatures } = prepareChartData(hourlyForecastData);

  const data = {
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
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 10
        }
      }
    }
  };

  function prepareChartData(hourlyForecast) {
    const hours = [];
    const temperatures = [];

    hourlyForecast.forEach(forecast => {
      hours.push(forecast.time);
      temperatures.push(forecast.temperature);
    });

    return {
      hours,
      temperatures
    };
  }

  return (
    <div>
      <Line height={250} type="basic" data={data} options={options} />
    </div>
  );
}

export default HourlyForecastChart;
