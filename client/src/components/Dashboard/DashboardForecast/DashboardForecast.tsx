import React, { FunctionComponent, useState, useEffect, KeyboardEvent } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';
import { selectQuery } from 'redux/reducers/location';

// Components
import DashboardForecastWeather from 'components/Dashboard/DashboardForecast/DashboardForecastWeather/DashboardForecastWeather';
import DashboardForecastAir from 'components/Dashboard/DashboardForecast/DashboardForecastAir/DashboardForecastAir';
import ButtonSwitch from 'components/ButtonSwitch/ButtonSwitch';

// Utils
import { capitalize, checkIfEnterOrSpacePressed } from 'utils/helpers';

// Styles
import { Flex } from 'styles/global';
import * as S from '../Dashboard.styles';

// Constants
import { FORECAST_LABEL, AIR_QUALITY_LABEL } from '../../../constants';

export enum ForecastType {
  weatherHourly = 'weatherHourly',
  weatherThreeHourly = 'weatherThreeHourly',
  weatherDaily = 'weatherDaily',
  airQualityHourly = 'airQualityHourly',
  airQualityDaily = 'airQualityDaily'
}

const DashboardForecast: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);
  const query = useAppSelector(selectQuery);

  const [infoType, setInfoType] = useState<string>(FORECAST_LABEL);

  const isWeatherForecast = infoType === FORECAST_LABEL;

  const [selectedForecastType, setSelectedForecastType] = useState<string>(
    ForecastType.weatherHourly
  );

  // Handlers
  const handleInfoType = (): void =>
    setInfoType(prevState => (prevState === FORECAST_LABEL ? AIR_QUALITY_LABEL : FORECAST_LABEL));

  const handleForecastTypeOnClick = (forecastType: string): void =>
    setSelectedForecastType(forecastType);

  const handleForecastTypeOnKeyPress = (
    e: KeyboardEvent<HTMLLIElement>,
    forecastType: string
  ): void => {
    if (checkIfEnterOrSpacePressed(e)) {
      setSelectedForecastType(forecastType);
    }
  };

  useEffect(() => {
    if (isWeatherForecast) {
      setSelectedForecastType(ForecastType.weatherHourly);
    } else {
      setSelectedForecastType(ForecastType.airQualityHourly);
    }
  }, [isWeatherForecast]);

  return (
    <S.DashboardForecast>
      <S.DashboardToolbar>
        <Flex justifySpaceBetween>
          <S.DashboardForecastTypes role="tablist">
            <Flex justifySpaceBetween>
              {(Object.keys(ForecastType) as Array<keyof typeof ForecastType>)
                .filter(key =>
                  isWeatherForecast ? key.startsWith('weather') : key.startsWith('air')
                )
                .map(key => (
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
                    {capitalize(key.split(isWeatherForecast ? 'weather' : 'airQuality')[1])}
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
      {isWeatherForecast ? (
        <DashboardForecastWeather
          selectedForecastType={selectedForecastType}
          infoType={infoType}
          query={query}
        />
      ) : (
        <DashboardForecastAir
          selectedForecastType={selectedForecastType}
          infoType={infoType}
          query={query}
        />
      )}
    </S.DashboardForecast>
  );
};

export default DashboardForecast;
