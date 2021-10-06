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

export { prepareChartData };
