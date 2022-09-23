import React, { FC, useEffect, useState } from 'react';
import { defaultCurrentWeather } from 'components/main/defaultStates';
import { CurrentWeatherType } from 'types/weatherTypes';
import { getWeather } from 'services/getWeather';
import { getImgURL } from 'utils/helpers';
import Loader from '../../pictures/loader.gif';

type SmallCardProps = {
  lon: number;
  lat: number;
  cityName: string;
};

export const CitySmallCard: FC<SmallCardProps> = ({ lon, lat, cityName }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType | undefined>(undefined);

  useEffect(() => {
    getWeather<{ current: CurrentWeatherType }>('/current/', lon, lat).then(res =>
      setCurrentWeather(res.current)
    );
  }, []);
  return (
    <>
      {currentWeather ? (
        <>
          <h4>
            {cityName}, {currentWeather.temperature}°C
          </h4>
          <img src={getImgURL(currentWeather.symbol)} alt={currentWeather.symbol} />
        </>
      ) : (
        <img src={Loader} />
      )}
    </>
  );
};
