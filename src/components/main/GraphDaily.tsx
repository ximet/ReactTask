import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import { getGraphDates } from 'utils/helpers';
import { DailyWeatherType } from 'types/weatherTypes';
import { useGraphSettings } from 'hooks/useGraphSettings';
import { GOLD_COLOR, DODGER_BLUE_COLOR } from 'utils/colorsConstants';

Chart.register(...registerables);

type GraphDailyProps = {
  weather: DailyWeatherType[];
};

const GraphDaily: FC<GraphDailyProps> = ({ weather }) => {
  const { options } = useGraphSettings();

  const data = {
    labels: weather.map(el => getGraphDates(el)),
    datasets: [
      {
        label: 'Day',
        data: weather.map(el => el.maxTemp),
        borderColor: GOLD_COLOR,
        backgroundColor: GOLD_COLOR,
        yAxisID: 'y'
      },
      {
        label: 'Night',
        data: weather.map(el => el.minTemp),
        borderColor: DODGER_BLUE_COLOR,
        backgroundColor: DODGER_BLUE_COLOR,
        yAxisID: 'y'
      }
    ]
  };
  return <Line data={data} options={options} />;
};

export default GraphDaily;
