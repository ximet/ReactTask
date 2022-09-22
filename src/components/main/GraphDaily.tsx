import React, { FC, useContext, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { themeContext } from 'context/themeContext';
import { convertTime } from 'helpers';
import { DailyWeatherType } from 'types/weatherTypes';
import { useGraphSettings } from 'hooks/useGraphSettings';

type GraphDailyProps = {
  weather: DailyWeatherType[];
};

const GraphDaily: FC<GraphDailyProps> = ({ weather }) => {
  const { options } = useGraphSettings();

  const data = {
    labels: weather.map(el => `${convertTime(el.date).date}-${convertTime(el.date).month}`),
    datasets: [
      {
        label: 'Day',
        data: weather.map(el => el.maxTemp),
        borderColor: '#ffd700',
        backgroundColor: '#ffd700',
        yAxisID: 'y'
      },
      {
        label: 'Night',
        data: weather.map(el => el.minTemp),
        borderColor: '#1e90ff',
        backgroundColor: '#1e90ff',
        yAxisID: 'y'
      }
    ]
  };
  return <Line data={data} options={options} />;
};

export default GraphDaily;
