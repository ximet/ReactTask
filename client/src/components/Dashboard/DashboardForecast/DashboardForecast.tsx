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
import ButtonSwitch from 'components/ButtonSwitch/ButtonSwitch';
import Carousel from 'components/Carousel/Carousel';
import Widget from 'components/Widget/Widget';

// Utils
import { capitalize } from 'utils/helpers';

// Styles
import { Flex } from 'styles/global';
import * as S from '../Dashboard.styles';

enum ForecastType {
  hourly = 'hourly',
  threeHourly = 'threeHourly',
  daily = 'daily'
}

const DashboardForecast: FunctionComponent = () => {
  const [infoType, setInfoType] = useState<string>('forecast');
  const [selectedForecastType, setSelectedForecastType] = useState<string>(ForecastType.hourly);
  const [carouselChildPointerEv, setCarouselChildPointerEv] = useState<boolean>(false);

  const theme = useAppSelector(state => state.theme);
  const query = useAppSelector(state => state.location.query);
  const { data, loading, error } = useAppSelector(state => {
    switch (selectedForecastType) {
      case ForecastType.hourly: {
        return state.location.weather.hourly;
      }
      case ForecastType.threeHourly: {
        return state.location.weather.threeHourly;
      }
      case ForecastType.daily: {
        return state.location.weather.daily;
      }
      default:
        return state.location.weather.hourly;
    }
  });

  const dispatch = useDispatch();

  // Handlers
  const handleInfoType = (): void =>
    setInfoType(prevState => (prevState === 'forecast' ? 'air-quality' : 'forecast'));
  const handleForecastType = (forecastType: string): void => setSelectedForecastType(forecastType);
  const handleGetLocationWeather = useCallback(() => {
    if (!query) return;

    switch (selectedForecastType) {
      case ForecastType.hourly: {
        dispatch(getLocationHourlyWeather(query));
        break;
      }
      case ForecastType.threeHourly: {
        dispatch(getLocationThreeHourlyWeather(query));
        break;
      }
      case ForecastType.daily: {
        dispatch(getLocationDailyWeather(query));
        break;
      }
      default:
        dispatch(getLocationHourlyWeather(query));
    }
  }, [dispatch, query, selectedForecastType]);

  // Get data
  useEffect(() => {
    handleGetLocationWeather();
  }, [handleGetLocationWeather]);

  return (
    <S.DashboardForecast>
      <S.DashboardToolbar>
        <Flex justifySpaceBetween>
          <S.DashboardForecastTypes>
            <Flex justifySpaceBetween>
              {(Object.keys(ForecastType) as Array<keyof typeof ForecastType>).map(key => (
                <S.DashboardForecastType
                  key={key}
                  themeType={theme}
                  active={selectedForecastType === key}
                  onClick={() => handleForecastType(key)}
                >
                  {capitalize(key)}
                </S.DashboardForecastType>
              ))}
            </Flex>
          </S.DashboardForecastTypes>
          <ButtonSwitch
            width="14.5rem"
            switchType="info"
            infoType={infoType}
            onClick={handleInfoType}
          >
            <span>Forecast</span>
            <span>Air quality</span>
          </ButtonSwitch>
        </Flex>
      </S.DashboardToolbar>
      <S.DashboardForecastWidgets>
        <RequestDataWrapper data={data} loading={loading} error={error}>
          <Carousel setCarouselChildPointerEv={setCarouselChildPointerEv}>
            {data?.map(item => (
              <Widget
                key={item.time || item.date}
                data={item}
                pointerEvents={carouselChildPointerEv}
              />
            ))}
          </Carousel>
        </RequestDataWrapper>
      </S.DashboardForecastWidgets>
    </S.DashboardForecast>
  );
};

export default DashboardForecast;
