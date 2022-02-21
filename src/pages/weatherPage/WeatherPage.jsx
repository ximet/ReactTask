import classes from './weatherPage.scss';
import { useEffect, useState } from 'react';
import FullForecast from '../../components/fullForecast/FullForecast';
import { getCurrentPosition } from '../../dataService/api';

function WeatherPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(async () => {
    const currentLocation = await getCurrentPosition();

    setCurrentLocation(currentLocation);
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <div className={classes.weatherPage}>
      <FullForecast location={currentLocation} />
    </div>
  ) : (
    '...Loading'
  );
}

export default WeatherPage;
