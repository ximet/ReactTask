import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import { getGraphDates } from 'utils/helpers';
import { useGraphSettings } from 'hooks/useGraphSettings';
import { GOLD_COLOR, DODGER_BLUE_COLOR } from 'utils/colorsConstants';
import { useAppSelector } from 'store/hooks';
import { dailyWeatherSelector } from 'store/dailyWeather/dailyWeatherSelectors';

Chart.register(...registerables);

const GraphDaily: FC = () => {
  const { data: weather } = useAppSelector(dailyWeatherSelector);
  const { options } = useGraphSettings();

  const data = {
    labels: weather!.map(el => getGraphDates(el)),
    datasets: [
      {
        label: 'Day',
        data: weather!.map(el => el.maxTemp),
        borderColor: GOLD_COLOR,
        backgroundColor: GOLD_COLOR,
        yAxisID: 'y'
      },
      {
        label: 'Night',
        data: weather!.map(el => el.minTemp),
        borderColor: DODGER_BLUE_COLOR,
        backgroundColor: DODGER_BLUE_COLOR,
        yAxisID: 'y'
      }
    ]
  };
  return <Line data={data} options={options} />;
};

export default GraphDaily;
