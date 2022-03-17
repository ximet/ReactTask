import classes from './worldWeatherPage.scss';
import { useHistory } from 'react-router-dom';
import { locationsInfo } from '../citiesListPage/locationsInfo';
import FullForecast from '../../components/fullForecast/FullForecast';
import ErrorPage from '../errorPage/ErrorPage';

function getCity(path) {
  const index = path.lastIndexOf('/');

  return path.slice(index + 1);
}

function getLocationByCity(path) {
  const city = getCity(path);
  const cityData = locationsInfo.filter(cityData => cityData.city === city);

  return cityData[0]?.location;
}

function WorldWeatherPage() {
  const history = useHistory();
  const location = getLocationByCity(history.location.pathname);

  return location ? (
    <div className={classes.worldWeatherPage}>
      <FullForecast location={location} />
    </div>
  ) : (
    <ErrorPage />
  )
}

export default WorldWeatherPage;
