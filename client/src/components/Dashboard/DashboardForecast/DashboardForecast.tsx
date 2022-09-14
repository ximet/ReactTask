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

// Styles
import { Flex } from 'styles/global';
import * as S from '../Dashboard.styles';

interface ForecastTypeState {
  hourly: boolean;
  threeHourly: boolean;
  daily: boolean;
}

const DashboardForecast: FunctionComponent = () => {
  const theme = useAppSelector(state => state.theme);
  const query = useAppSelector(state => state.location.query);
  const { data: hourlyData, loading: hourlyLoading, error: hourlyError } = useAppSelector(
    state => state.location.weather.hourly
  );
  const {
    data: threeHourlyData,
    loading: threeHourlyLoading,
    error: threeHourlyError
  } = useAppSelector(state => state.location.weather.threeHourly);
  const { data: dailyData, loading: dailyLoading, error: dailyError } = useAppSelector(
    state => state.location.weather.daily
  );

  const [forecastType, setForecastType] = useState<ForecastTypeState>({
    hourly: true,
    threeHourly: false,
    daily: false
  });
  const [infoType, setInfoType] = useState<string>('forecast');
  const [carouselChildPointerEv, setCarouselChildPointerEv] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Handlers
  const handleInfoType = (): void =>
    setInfoType(prevState => (prevState === 'forecast' ? 'air-quality' : 'forecast'));
  const handleForecastType = (hourly: boolean, threeHourly: boolean, daily: boolean): void =>
    setForecastType(prevState => ({
      ...prevState,
      hourly,
      threeHourly,
      daily
    }));
  const handleGetLocationHourlyWeather = useCallback(() => {
    if (query) dispatch(getLocationHourlyWeather(query));
  }, [dispatch, query]);
  const handleGetLocationThreeHourlyWeather = useCallback(() => {
    if (query) dispatch(getLocationThreeHourlyWeather(query));
  }, [dispatch, query]);
  const handleGetLocationDailyWeather = useCallback(() => {
    if (query) dispatch(getLocationDailyWeather(query));
  }, [dispatch, query]);

  // Get data
  useEffect(() => {
    if (forecastType.hourly) handleGetLocationHourlyWeather();
    if (forecastType.threeHourly) handleGetLocationThreeHourlyWeather();
    if (forecastType.daily) handleGetLocationDailyWeather();
  }, [
    handleGetLocationHourlyWeather,
    forecastType.hourly,
    handleGetLocationThreeHourlyWeather,
    forecastType.threeHourly,
    handleGetLocationDailyWeather,
    forecastType.daily
  ]);

  let data;
  let loading;
  let error;
  if (forecastType.hourly) {
    data = hourlyData;
    loading = hourlyLoading;
    error = hourlyError;
  }
  if (forecastType.threeHourly) {
    data = threeHourlyData;
    loading = threeHourlyLoading;
    error = threeHourlyError;
  }
  if (forecastType.daily) {
    data = dailyData;
    loading = dailyLoading;
    error = dailyError;
  }

  return (
    <S.DashboardForecast>
      <S.DashboardToolbar>
        <Flex justifySpaceBetween>
          <S.DashboardForecastTypes>
            <Flex justifySpaceBetween>
              <S.DashboardForecastType
                theme={theme}
                active={forecastType.hourly}
                onClick={() => handleForecastType(true, false, false)}
              >
                Hourly
              </S.DashboardForecastType>
              <S.DashboardForecastType
                theme={theme}
                active={forecastType.threeHourly}
                onClick={() => handleForecastType(false, true, false)}
              >
                Three-hourly
              </S.DashboardForecastType>
              <S.DashboardForecastType
                theme={theme}
                active={forecastType.daily}
                onClick={() => handleForecastType(false, false, true)}
              >
                Daily
              </S.DashboardForecastType>
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
                pointerEvents={carouselChildPointerEv ? 'true' : 'false'}
              />
            ))}
          </Carousel>
        </RequestDataWrapper>
      </S.DashboardForecastWidgets>
    </S.DashboardForecast>
  );
};

export default DashboardForecast;
