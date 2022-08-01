import { CurrentForecast, DailyForecast, SearchBar, HourlyForecast } from '../../Components';
import useApi from '../../hooks/useApi';
import styles from './HomePage.module.scss';

function HomePage() {
  const { locationData, currWeather, dailyWeather, hourlyWeather, setCoords, isLoading, error } =
    useApi();

  return (
    <main className={styles.container}>
      <SearchBar coordsStateHandler={setCoords} />

      {locationData && currWeather && (
        <CurrentForecast locationData={locationData} currWeather={currWeather.current} />
      )}

      {hourlyWeather && <HourlyForecast hourlyWeather={hourlyWeather} />}
      {dailyWeather && <DailyForecast dailyWeather={dailyWeather} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </main>
  );
}

export default HomePage;
