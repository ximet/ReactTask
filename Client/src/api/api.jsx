import { useState, useEffect } from 'react';
import axios from 'axios';
import { LOCAL_SERVER, API_ADDRESS, QUERY_TYPE } from '../constants';
import apiAuthenctication from './apiAuthentication';

function getLocalData() {
  const [apiData, setApiData] = useState();
  const [currentLocation, setcurrentLocation] = useState();
  const [token, setToken] = useState();
  const [weatherdata, setWeatherData] = useState();

  const AUTH = {
    Authorization: `Bearer ${token}`
  };

  // Calls server and gets a token

  useEffect(async () => {
    let tokenData = await apiAuthenctication()
      .then(result => result)
      .catch(err => console.log(err));

    setToken(tokenData);
  }, []);

  // Gets weather data for corresponding city

  useEffect(() => {
    apiData
      ? axios
          .get(`${API_ADDRESS + QUERY_TYPE.GET_LATEST_DATA + apiData.data.id}`, {
            headers: AUTH
          })
          .then(result => setWeatherData(result))
      : null;
  }, [apiData]);

  // Gets the cooresponding city from the API based and client coordinates

  useEffect(() => {
    currentLocation
      ? axios
          .get(
            `${API_ADDRESS + QUERY_TYPE.GET_LOCATION + currentLocation.long},${
              currentLocation.lat
            }`,
            {
              headers: AUTH
            }
          )
          .then(result => setApiData(result))
      : null;
  }, [currentLocation, token]);

  // Gets client coordinates

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
