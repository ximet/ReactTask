import { useState, useEffect } from 'react';
import axios from 'axios';

function getLocalData() {
  const [apiData, setApiData] = useState('');
  const [currentLocation, setcurrentLocation] = useState();
  const [token, setToken] = useState();
  const [weatherdata, setweatherData] = useState();
  const AUTH_TOKEN = token;

  useEffect(() => {
    axios.get('http://localhost:3001/api').then(result => setToken(result.data));
  }, []);

  useEffect(() => {
    apiData
      ? axios
          .get(`https://pfa.foreca.com/api/v1/observation/latest/${apiData.data.id}`, {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`
            }
          })
          .then(result => setweatherData(result))
      : null;
  }, [apiData]);

  useEffect(() => {
    console.log('currentLocation', currentLocation);
    currentLocation
      ? axios
          .get(
            `https://pfa.foreca.com/api/v1/location/${currentLocation.long},${currentLocation.lat}`,
            {
              headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`
              }
            }
          )
          .then(result => setApiData(result))
      : null;
  }, [currentLocation, token]);

  useEffect(async () => {
    token &&
      navigator.geolocation.getCurrentPosition(pos => {
        const newUserPos = {
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        };
        setcurrentLocation(newUserPos);
      });
  }, [token]);

  return weatherdata;
}

export default getLocalData;
