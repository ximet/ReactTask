import React, { FunctionComponent, useState, useEffect, useCallback, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';
import { selectQuery } from 'redux/reducers/location';

// Types
import { WeatherInfo, AirQualityInfo } from 'types';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';
import ButtonSwitch from 'components/ButtonSwitch/ButtonSwitch';
import Carousel from 'components/Carousel/Carousel';
import Widget from 'components/Widget/Widget';

// Utils
import { capitalize, checkIfEnterOrSpacePressed } from 'utils/helpers';
import {
  WeatherType,
  AirQualityType,
  selectLocationWeather,
  selectLocationAirQuality,
  getLocationWeather,
  getLocationAirQuality
} from './DashboardForecast.utils';

// Styles
import { Flex } from 'styles/global';
import * as S from '../Dashboard.styles';

// Constants
import { FORECAST_LABEL, AIR_QUALITY_LABEL } from '../../../constants';

const DashboardForecast: FunctionComponent = () => {
  const [carouselChildPointerEv, setCarouselChildPointerEv] = useState<boolean>(false);
  const [infoType, setInfoType] = useState<string>(FORECAST_LABEL);
  const [selectedForecastType, setSelectedForecastType] = useState<WeatherType | AirQualityType>(
    WeatherType.hourly
  );

  const isWeatherForecast = infoType === FORECAST_LABEL;

  const theme = useAppSelector(selectTheme);
  const query = useAppSelector(selectQuery);

  const dispatch = useDispatch();

  const { data, loading, error } = useAppSelector(state =>
    isWeatherForecast
      ? selectLocationWeather(state, selectedForecastType)
      : selectLocationAirQuality(state, selectedForecastType)
  );

  // Handlers
  const handleInfoType = (): void =>
    setInfoType(prevState => (prevState === FORECAST_LABEL ? AIR_QUALITY_LABEL : FORECAST_LABEL));

  const handleForecastTypeOnClick = (forecastType: WeatherType | AirQualityType): void =>
    setSelectedForecastType(forecastType);

  const handleForecastTypeOnKeyPress = (
    e: KeyboardEvent<HTMLLIElement>,
    forecastType: WeatherType | AirQualityType
  ): void => {
    if (checkIfEnterOrSpacePressed(e)) {
      setSelectedForecastType(forecastType);
    }
  };

  const handleGetLocationForecast = useCallback(() => {
    if (!query) return;
    isWeatherForecast
      ? getLocationWeather(query, selectedForecastType, dispatch)
      : getLocationAirQuality(query, selectedForecastType, dispatch);
  }, [dispatch, query, selectedForecastType, isWeatherForecast]);

  // Set selected forecast type depending on info type
  useEffect(() => {
    setSelectedForecastType(isWeatherForecast ? WeatherType.hourly : AirQualityType.hourly);
  }, [isWeatherForecast]);

  // Get data
  useEffect(() => {
    handleGetLocationForecast();
  }, [handleGetLocationForecast]);

  return (
    <S.DashboardForecast>
      <S.DashboardToolbar>
        <Flex justifySpaceBetween>
          <S.DashboardForecastTypes role="tablist">
            <Flex justifySpaceBetween>
              {(Object.keys(isWeatherForecast ? WeatherType : AirQualityType) as
                | WeatherType[]
                | AirQualityType[]).map(key => (
                <S.DashboardForecastType
                  tabIndex={0}
                  role="tab"
                  aria-controls="tabpanel"
                  aria-selected={selectedForecastType === key}
                  key={key}
                  themeType={theme}
                  active={selectedForecastType === key}
                  onClick={() => handleForecastTypeOnClick(key)}
                  onKeyPress={e => handleForecastTypeOnKeyPress(e, key)}
                >
                  {capitalize(key)}
                </S.DashboardForecastType>
              ))}
            </Flex>
          </S.DashboardForecastTypes>
          <ButtonSwitch
            aria-label="Toggle info type"
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
      <S.DashboardForecastWidgets id="tabpanel" role="tabpanel">
        <RequestDataWrapper data={data} loading={loading} error={error}>
          <Carousel setCarouselChildPointerEv={setCarouselChildPointerEv}>
            {data?.map((item: WeatherInfo | AirQualityInfo) => (
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
    </S.DashboardForecast>
  );
};

export default DashboardForecast;
