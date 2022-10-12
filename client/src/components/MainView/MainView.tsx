import { getHourlyWeather } from 'API/get';
import CurrentWeatherCard from 'components/CurrentWeatherCard';
import DailyWeatherCard from 'components/DailyWeatherCard';
import HourlyWeatherCard from 'components/HourlyWeatherCard';
import LocationContext from 'contexts/LocationContext';
import React, { FC, useState, useContext, useRef } from 'react';
import { DailyWeather, HourlyWeather, LocationData, CurrentWeatherData } from 'types';
import { getBackgroundImg } from 'utils/getImages';
import styles from './MainView.module.scss';

interface MainViewParams {
  setHourlyForecast: (arg: HourlyWeather[] | undefined) => void;
  statusMsg?: string | null;
  currentWeather: CurrentWeatherData | null;
  locationData: LocationData | undefined;
  forecast: DailyWeather[] | undefined;
  hourlyForecast: HourlyWeather[] | undefined;
}

const MainView: FC<MainViewParams> = ({
  setHourlyForecast,
  statusMsg,
  currentWeather,
  locationData,
  forecast,
  hourlyForecast
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { coordinates } = useContext(LocationContext);

  const ref = useRef<null | HTMLDivElement>(null);

  const onCardClick = async (index: number, date: string) => {
    setHourlyForecast([]);
    const hourlyWeather = await getHourlyWeather(coordinates);
    const clickedDay = new Date(date).getDate();
    const filteredHoursByDay = hourlyWeather?.filter(hour => {
      return new Date(hour.time).getDate() === clickedDay;
    });
    setHourlyForecast(filteredHoursByDay);
    setActiveCard(index);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleActiveStyles = (index: number): boolean => {
    return activeCard === index;
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
                  isActive={toggleActiveStyles(index)}
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
        <div className={styles.hourlyCardsContainer} ref={ref}>
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
