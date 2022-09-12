import { getCurrentWeather, getDailyWeather, getHourlyWeather, getLocationByQuery } from 'API/get';
import LocationContext from 'contexts/LocationContext';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DailyWeather, HourlyWeather, BoxStyleParams } from 'types';
import CurrentWeatherCard from 'components/CurrentWeatherCard';
import DailyWeatherCard from 'components/DailyWeatherCard';
import { getBackgroundImg } from 'utils/getImages';
import HourlyWeatherCard from 'components/HourlyWeatherCard';
import useGetData from 'hooks/useGetData';
import { Loader } from 'components/Loader/Loader';
import styles from './styles.module.scss';

type LocationParams = {
  location: string | undefined;
};

const Details: React.FC = () => {
  const { location } = useParams<LocationParams>();
  const { coordinates, statusMsg } = useContext(LocationContext);
  const [boxStyle, setBoxStyle] = useState<BoxStyleParams>({
    activeObject: null,
    objects: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  });

  const {
    currentWeather,
    locationData,
    forecast,
    hourlyForecast,
    setHourlyForecast,
    isLoading
  } = useGetData(getCurrentWeather, getDailyWeather, getHourlyWeather, getLocationByQuery, {
    coordinates,
    statusMsg,
    location
  });

  if (isLoading) {
    return <Loader />;
  }

  const onCardClick = async (index: number, date: string) => {
    setHourlyForecast([]);
    const hourlyWeather = await getHourlyWeather(coordinates);
    const clickedDay = new Date(date).getDate();
    const filteredHoursByDay = hourlyWeather.filter(hour => {
      return new Date(hour.time).getDate() === clickedDay;
    });
    setHourlyForecast(filteredHoursByDay);
    setBoxStyle({ ...boxStyle, activeObject: boxStyle.objects[index] });
  };

  const toggleActiveStyles = (index: number): string => {
    if (boxStyle.activeObject === boxStyle.objects[index]) {
      return styles.active;
    }
    return styles.inactive;
  };

  return (
    <main className={styles.main}>
      <div className={styles.errorMsg}>{statusMsg}</div>
      {currentWeather?.symbolPhrase && (
        <img
          src={getBackgroundImg(currentWeather?.symbolPhrase)}
          alt={currentWeather?.symbolPhrase}
          className={styles.backgroundImages}
        />
      )}
      <div className={styles.mainContainer}>
        <CurrentWeatherCard weatherData={currentWeather} location={locationData} />
        <div className={styles.dailyCardsContainer}>
          <h1 className={styles.dailyHeader}>Daily</h1>
          <div className={styles.dailyCardsBox}>
            {forecast.map((day: DailyWeather, index) => {
              return (
                <DailyWeatherCard
                  className={toggleActiveStyles(index)}
                  key={day.date}
                  dayWeather={day}
                  onClick={() => {
                    return onCardClick(index, day.date);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.hourlyCardsContainer}>
          <h1 className={styles.hourlyHeader}>Hourly</h1>
          <hr />
          <div className={styles.hourlyCardsBox}>
            {hourlyForecast?.map((hour: HourlyWeather) => {
              return <HourlyWeatherCard key={hour.time} hourWeather={hour} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
