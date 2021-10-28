import { dateFormat, timeOptions } from '../constants/date';
import { getConvertedTemperature } from './temperatureData';
import { DEGREE_SYMBOL, WIND_SPEED_UNIT } from '../constants/units';

export const CHART_HEIHGT = 70;

export function getFormattedHourlyData(data, unit) {
  const time = [];
  const temperature = [];
  const wind = [];

  data.forEach(forecast => {
    const date = new Date(forecast.time);
    const forecastTime = date.toLocaleTimeString(dateFormat, timeOptions);

    time.push(forecastTime);
    temperature.push(getConvertedTemperature(forecast.temperature, unit));
    wind.push(forecast.windSpeed);
  });

  return { time, temperature, wind };
}

export const getHourlyChartData = (data, unit) => ({
  labels: data.time,
  datasets: [
    {
      label: `Temperature, ${DEGREE_SYMBOL}${unit}`,
      data: data.temperature,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      tension: 0.3,
      borderColor: 'rgba(255, 99, 132, 0.2)',
      fill: {
        target: 'origin',
        above: 'rgb(255, 99, 132, 0.1)',
        below: 'rgb(255, 99, 132, 0.1)'
      }
    },
    {
      label: `Wind, ${WIND_SPEED_UNIT}`,
      data: data.wind,
      fill: false,
      backgroundColor: 'rgb(81,113,176)',
      tension: 0.3,
      borderColor: 'rgba(81, 113, 176, 0.2)',
      fill: {
        target: 'origin',
        above: 'rgb(81, 113, 176, 0.1)',
        below: 'rgb(81, 113, 176, 0.1)'
      }
    }
  ]
});

export const hourlyChartOptions = {
  plugins: {
    legend: {
      position: 'bottom',
      margin: 40,
      labels: {
        fontColor: 'black',
        fontFamily: 'Calibri Light',
        fontStyle: 'italic',
        padding: 20
      }
    },
    tooltip: {
      callbacks: {
        label: context => {
          const [option, unit] = context.dataset.label.split(', ');

          return `${option}: ${context.raw} ${unit}`;
        }
      },
      backgroundColor: 'rgba(81,113,176, 0.8)',
      titleAlign: 'center',
      titleFont: {
        size: 14
      },
      bodySpacing: 4,
      padding: 12,
      displayColors: false
    }
  },

  scales: {
    y: {
      ticks: {
        stepSize: 3
      }
    }
  }
};
