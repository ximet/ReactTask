import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserLocationWeather } from './homePageActions';
import SafeWeatherImage from '../../SafeImage/SafeWeatherImage';
import Loader from '../../Loader/Loader';
import { capitalize, toReadableDate, toReadableTime } from '../../../helpers/formatHelper';
import { getLocation } from '../../../Store/selectors/geoSelectors';
import { getCurrentWeather, getLoading } from './homePageSelectors';

function HomePage() {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const currentWeather = useSelector(getCurrentWeather);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchUserLocationWeather());
  }, []);

  return (
    <>
      <h1>Home</h1>
      {location && (
        <h2>
          {location.city}, {location.country}
        </h2>
      )}
      {loading && <Loader />}
      {currentWeather && <p>{toReadableDate(currentWeather.current.time)}</p>}
      {currentWeather && <p>{toReadableTime(currentWeather.current.time)}</p>}
      {currentWeather && <p>Probability of precipitation: {currentWeather.current.precipProb}%</p>}
      {currentWeather && <p>Pressure (hPa) {currentWeather.current.pressure}%</p>}
      {currentWeather && <p>Wind speed (m/s) {currentWeather.current.windSpeed}</p>}
      {currentWeather && <p>{capitalize(currentWeather.current.symbolPhrase)}</p>}
      {currentWeather && <SafeWeatherImage symbolCode={currentWeather.current.symbol} />}
    </>
  );
}

export default HomePage;
