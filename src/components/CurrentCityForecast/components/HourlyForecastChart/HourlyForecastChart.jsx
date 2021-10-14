import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { prepareChartData } from '../../../../utils/prepareData';
import { hourlyLineChartData, hourlyLineChartOptions } from '../../../../utils/chartSettings';
import ApiService from '../../../../services/ForecastApiService';
import { COOKIE_TOKEN_FIELD } from '../../../../utils/constants';

function HourlyForecastChart({ locationId }) {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [cookies] = useCookies([COOKIE_TOKEN_FIELD]);
  const [hours, temperatures] = prepareChartData(hourlyForecast);

  useEffect(async () => {
    const { forecast } = await ApiService.getHourlyForecast(locationId, cookies);
    setHourlyForecast(forecast);
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
