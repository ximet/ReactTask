import { formatTime } from './dateTimeUtils';

function prepareChartData(hourlyForecast) {
  const hours = [];
  const temperatures = [];

  hourlyForecast.forEach(forecast => {
    hours.push(formatTime(forecast.time));
    temperatures.push(forecast.temperature);
  });

  return [hours, temperatures];
}

export { prepareChartData };
