import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { useAppSelector } from 'redux/hooks';
import {
  getLocationHourlyWeather,
  getLocationThreeHourlyWeather,
  getLocationDailyWeather
} from 'redux/actionCreators/location';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';
import Carousel from 'components/Carousel/Carousel';
import Widget from 'components/Widget/Widget';

// Types
import { ForecastType } from '../DashboardForecast';

// Styles
import * as S from '../../Dashboard.styles';

interface DashboardForecastWeatherProps {
  selectedForecastType: string;
  infoType: string;
  query: string;
}

const DashboardForecastWeather: FunctionComponent<DashboardForecastWeatherProps> = ({
  selectedForecastType,
  infoType,
  query
}) => {
  const [carouselChildPointerEv, setCarouselChildPointerEv] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { data, loading, error } = useAppSelector(({ location: { weather } }) => {
    switch (selectedForecastType) {
      case ForecastType.weatherHourly:
      default:
        return weather.hourly;
      case ForecastType.weatherThreeHourly: {
        return weather.threeHourly;
      }
      case ForecastType.weatherDaily: {
        return weather.daily;
      }
    }
  });

  const handleGetLocationWeather = useCallback(() => {
    if (!query) return;

    switch (selectedForecastType) {
      case ForecastType.weatherHourly:
      default:
        dispatch(getLocationHourlyWeather(query));
        break;
      case ForecastType.weatherThreeHourly: {
        dispatch(getLocationThreeHourlyWeather(query));
        break;
      }
      case ForecastType.weatherDaily: {
        dispatch(getLocationDailyWeather(query));
        break;
      }
    }
  }, [dispatch, query, selectedForecastType]);

  // Get data
  useEffect(() => {
    handleGetLocationWeather();
  }, [handleGetLocationWeather]);

  return (
    <S.DashboardForecastWidgets id="tabpanel" role="tabpanel">
      <RequestDataWrapper data={data} loading={loading} error={error}>
        <Carousel setCarouselChildPointerEv={setCarouselChildPointerEv}>
          {data?.map(item => (
            <Widget
              key={item.time || item.date}
              data={item}
              infoType={infoType}
              pointerEvents={carouselChildPointerEv}
            />
          ))}
        </Carousel>
      </RequestDataWrapper>
    </S.DashboardForecastWidgets>
  );
};

export default DashboardForecastWeather;
