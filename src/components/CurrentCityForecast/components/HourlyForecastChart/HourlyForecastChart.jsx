import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { prepareChartData } from '../../../../utils/prepareData';
import { hourlyLineChartData, hourlyLineChartOptions } from '../../../../utils/chartSettings';
import ApiService from '../../../../services/ForecastApiService';

function HourlyForecastChart({ locationId }) {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [hours, temperatures] = prepareChartData(hourlyForecast);

  useEffect(async () => {
    const { data } = await ApiService.getHourlyForecast(locationId);
    setHourlyForecast(data.forecast);
  }, []);

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
