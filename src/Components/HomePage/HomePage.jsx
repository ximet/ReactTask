import {
  CurrentForecast,
  DailyForecast,
  SearchBar,
  HourlyForecast,
  Message
} from '../../Components';
import useApi from '../../hooks/useApi';

import styles from './HomePage.module.scss';

function HomePage() {
  const {
    locationData,
    currWeather,
    dailyWeather,
    hourlyWeather,
    setCoords,
    isLoading,
    error
  } = useApi();

  return (
    <main className={styles.container}>
      <SearchBar coordsStateHandler={setCoords} />

      {locationData && currWeather && (
        <CurrentForecast locationData={locationData} currWeather={currWeather.current} />
      )}

      {hourlyWeather && <HourlyForecast hourlyWeather={hourlyWeather} />}
      {dailyWeather && <DailyForecast dailyWeather={dailyWeather} />}
      {isLoading && (
        <Message>
          <h2>Loading...</h2>
        </Message>
      )}

      {error && (
        <Message>
          <h2>{error.message}</h2>
        </Message>
      )}
    </main>
  );
}

export default HomePage;
