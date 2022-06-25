import { useEffect, useState } from 'react';
import findMyLocation from '../Helpers/geolocation';
import endpoints from '../Helpers/endpoints';
import { requestToken, instance } from '../DataService/dataService';
import { COOKIE } from '../DataService/cookieService';

export default function Home() {
  const [currWeather, setCurrWeather] = useState([null]);
  const [coords, setCoords] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationId, setLocationId] = useState(null);

  async function getCurrentWeather() {
    if (!coords) {
      return;
    }
    try {
      const { data } = await instance.get(endpoints.CURR_WEATHER(coords));
      setCurrWeather([data.current]);
    } catch (error) {
      console.error(error);
    }
  }

  async function getLocationData() {
    if (!coords) {
      return;
    }
    try {
      const { data } = await instance.get(endpoints.LOCATION_DATA(coords));
      setLocation(data.name);
      setLocationId(data.id);
    } catch (error) {
      console.error(error);
    }
  }

  async function tokenCheck() {
    const token = (await requestToken()) || COOKIE.loadToken();
    if (token) {
      COOKIE.saveToken(token);
    }
  }

  useEffect(async () => {
    await tokenCheck();
    findMyLocation(setCoords);
  }, []);

  useEffect(async () => {
    getCurrentWeather();
    getLocationData();
  }, [coords]);

  return (
    <div>
      <p>COORDINATES: {JSON.stringify(coords)}</p>
      <p>LOCATION NAME: {JSON.stringify(location)}</p>
      <p>LOCATION ID: {JSON.stringify(locationId)}</p>
      <p>CURRENT WEATHER: {JSON.stringify(currWeather)}</p>
      <p></p>
    </div>
  );
}
