import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import { getGraphDates } from 'utils/helpers';
import { HourlyWeatherType } from 'types/weatherTypes';
import { useGraphSettings } from 'hooks/useGraphSettings';
import { GOLD_COLOR, DODGER_BLUE_COLOR } from 'utils/colorsConstants';

Chart.register(...registerables);

type GraphHourlyProps = {
  weather: HourlyWeatherType[];
};

const GraphHourly: FC<GraphHourlyProps> = ({ weather }) => {
  const { options } = useGraphSettings();

  const colors: string[] = [];
  const data = {
    labels: weather.map(el => getGraphDates(el)),
    datasets: [
      {
        label: 'Temperature °C',
        data: weather.map(el => el.temperature),
        backgroundColor: colors,
        yAxisID: 'y',
        fill: { above: GOLD_COLOR, below: DODGER_BLUE_COLOR, target: { value: 0 } }
      }
    ]
  };

  function getColors() {
    for (let i = 0; i < data.datasets[0].data.length; i++) {
      if (data.datasets[0].data[i] > 0) {
        colors.push(GOLD_COLOR);
      } else {
        colors.push(DODGER_BLUE_COLOR);
      }
    }
  }

  getColors();

  return <Line data={data} options={options} />;
};

export default GraphHourly;
