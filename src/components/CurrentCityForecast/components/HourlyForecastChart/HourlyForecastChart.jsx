import { Line } from 'react-chartjs-2';
import hourlyForecastData from './mockData';
import { prepareChartData } from '../../../../utils/mockUtils';
import { hourlyLineChartData, hourlyLineChartOptions } from '../../../../utils/chartSettings';

function HourlyForecastChart() {
  const { hours, temperatures } = prepareChartData(hourlyForecastData);

  return (
    <div>
      <Line
        height={250}
        type="basic"
        data={hourlyLineChartData(hours, temperatures)}
        options={hourlyLineChartOptions}
      />
    </div>
  );
}

export default HourlyForecastChart;
