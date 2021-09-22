import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import AuthService from './services/AuthService';

function App() {
  const [cookies] = useCookies(['token']);
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    const searchedLocations = await getSearchLocation('London', cookies);
    setLocations(searchedLocations.locations);
  }, []);

  async function getSearchLocation(location, cookies) {
    const accessToken = await AuthService.getAccessToken(cookies);
    const url = `/api/v1/location/search/${location}`;

    const fetchResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const responseData = await fetchResponse.json();

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
