import React, { FC, useEffect, useState } from 'react';
import Loader from 'components/loader/Loader';
import { CurrentWeatherType } from 'types/weatherTypes';
import { getWeather } from 'services/getWeather';
import { getImgURL } from 'utils/helpers';
import { Coordinates } from 'types/positionType';

type SmallCardProps = {
  lon: number;
  lat: number;
  cityName: string;
};

export const CitySmallCard: FC<SmallCardProps> = ({ lon, lat, cityName }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType | undefined>(undefined);

  useEffect(() => {
    const position: Coordinates = {
      latitude: lat,
      longitude: lon
    };

    getWeather<{ current: CurrentWeatherType }>('/current/', position).then(res =>
      setCurrentWeather(res.current)
    );
  }, []);
  return currentWeather ? (
    <>
      <h4>
        {cityName}, {currentWeather.temperature}°C
      </h4>
      <img src={getImgURL(currentWeather.symbol)} alt={currentWeather.symbol} />
    </>
  ) : (
    <Loader />
  );
};
