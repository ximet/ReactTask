import { getHourlyWeather } from 'API/get';
import CurrentWeatherCard from 'components/CurrentWeatherCard';
import DailyWeatherCard from 'components/DailyWeatherCard';
import HourlyWeatherCard from 'components/HourlyWeatherCard';
import React, { FC, useState } from 'react';
import {
  BoxStyleParams,
  DailyWeather,
  GeolocationCoordinates,
  HourlyWeather,
  LocationData,
  WeatherData
} from 'types';
import { getBackgroundImg } from 'utils/getImages';
import styles from './MainView.module.scss';

interface MainViewParams {
  coordinates: GeolocationCoordinates | null;
  setHourlyForecast: (arg: HourlyWeather[]) => void;
  statusMsg: string | null;
  currentWeather: WeatherData | null;
  locationData: LocationData | undefined;
  forecast: DailyWeather[];
  hourlyForecast: HourlyWeather[];
}

const MainView: FC<MainViewParams> = ({
  coordinates,
  setHourlyForecast,
  statusMsg,
  currentWeather,
  locationData,
  forecast,
  hourlyForecast
}) => {
  const [boxStyle, setBoxStyle] = useState<BoxStyleParams>({
    activeObject: null,
    objects: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  });

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
            {forecast?.map((day: DailyWeather, index) => {
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

export default MainView;
