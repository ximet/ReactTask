import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CurrentCityForecastView from './views/CurrentCityForecastView/CurrentCityForecastView';

import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import ApiService from './services/ForecastApiService';

function App() {
  const [cookies] = useCookies(['token']);
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    const searchedLocations = await getSearchLocations('London', cookies);
    setLocations(searchedLocations.locations);
  }, []);

  async function getSearchLocations(locationQueryStr, cookies) {
    let responseData = {
      status: false
    };

    try {
      const accessToken = await ApiService.getAccessToken(cookies);
      const url = `/api/v1/location/search/${locationQueryStr}`;

      responseData = await ApiService.getLocationsSearch(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  }

  return (
    <>
      <Header />
      <CurrentCityForecastView />
      <Footer />
    </>
  );
}

export default App;
