// @flow
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { prepareChartData } from '../../../../utils/prepareData';
import { hourlyLineChartData, hourlyLineChartOptions } from '../../../../utils/chartSettings';
import { setCurrentHourlyForecast } from '../../../../actions/locationsManagerActions';
import { connect } from 'react-redux';
import * as React from 'react';
import type { HourlyForecastPropsType } from './HourlyForecastChartPropsType';
import Preloader from '../../../Preloader/Preloader';

function HourlyForecastChart({
  locationId,
  currentHourlyForecast,
  isLoading,
  setCurrentHourlyForecast
}: HourlyForecastPropsType): React$Node {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [hours, temperatures] = prepareChartData(currentHourlyForecast || []);

  useEffect(() => {
    setCurrentHourlyForecast(locationId);
  }, [locationId, setCurrentHourlyForecast]);

  return (
    <div>
      {isLoading ? (
        <Line
          height={250}
          type="basic"
          data={hourlyLineChartData(hours, temperatures)}
          options={hourlyLineChartOptions}
        />
      ) : (
        <Preloader />
      )}
    </div>
  );
}

const mapStateToProps = ({
  locationManager: { currentHourlyForecast },
  preloaderManager: { hourlyForecast }
}) => {
  return {
    currentHourlyForecast,
    isLoading: hourlyForecast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentHourlyForecast: locationId => dispatch(setCurrentHourlyForecast(locationId))
  };
};

const WrappedHourlyForecastChart = (connect(
  mapStateToProps,
  mapDispatchToProps
)(HourlyForecastChart): React.AbstractComponent<HourlyForecastPropsType>);

export default WrappedHourlyForecastChart;
