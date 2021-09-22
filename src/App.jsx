import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import ApiService from './services/ForecastApiService';

function App() {
  const [cookies] = useCookies(['token']);
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    const searchedLocations = await getSearchLocation('London', cookies);
    setLocations(searchedLocations.locations);
  }, []);

  async function getSearchLocation(location, cookies) {
    const accessToken = await ApiService.getAccessToken(cookies);
    const url = `/api/v1/location/search/${location}`;

    const responseData = ApiService.getLocationSearch(url, accessToken);

    return responseData;
  }

  return (
    <>
      <div>Hello world!</div>
      <ol>
        {locations.map(location => (
          <li key={location.id}>
            <b>{location.name}</b>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
