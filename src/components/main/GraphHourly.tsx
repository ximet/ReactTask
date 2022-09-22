import React, { FC, useMemo, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { themeContext } from 'context/themeContext';
import { convertTime } from 'helpers';
import { HourlyWeatherType } from 'types/weatherTypes';
import { useGraphSettings } from 'hooks/useGraphSettings';

type GraphHourlyProps = {
  weather: HourlyWeatherType[];
};

const GraphHourly: FC<GraphHourlyProps> = ({ weather }) => {
  const { options } = useGraphSettings();

  const data = {
    labels: weather.map(el => `${convertTime(el.time).hours}-${convertTime(el.time).minutes}`),
    datasets: [
      {
        label: 'Temperature °C',
        data: weather.map(el => el.temperature),
        borderColor: '#ffd700',
        backgroundColor: '#ffd700',
        yAxisID: 'y'
      }
    ]
  };
  return <Line data={data} options={options} />;
};

export default GraphHourly;
