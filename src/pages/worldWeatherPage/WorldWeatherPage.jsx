import classes from './worldWeatherPage.scss';
import { useHistory } from 'react-router-dom';
import { citiesInfo } from '../citiesListPage/CitiesListPage';
import FullForecast from '../../components/fullForecast/FullForecast';

function getCity(path) {
  const index = path.lastIndexOf('/');

  return path.slice(index + 1);
}

function getLocationByCity(path) {
  const city = getCity(path);
  const cityData = citiesInfo.filter(cityData => cityData.city === city);

  return cityData[0].location;
}

function WorldWeatherPage() {
  const history = useHistory();

  return (
    <div>
      <FullForecast location={getLocationByCity(history.location.pathname)} />
    </div>
  );
}

export default WorldWeatherPage;
