import React from 'react';
import Title from '../../layout/Typography/Title/Title';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [data, setdata] = useState('');
  const [apiData, setApiData] = useState('');
  const [currentLocation, setcurrentLocation] = useState();
  const [weatherData, setweatherData] = useState();
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTYzNzA1OTMyOCwiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2MzcwNTkzMjgsImp0aSI6IjYxNDdlMTEwY2Y2NzE1ZjAiLCJzdWIiOiJpdmFuc2hvc2hrb3YiLCJmbXQiOiJYRGNPaGpDNDArQUxqbFlUdGpiT2lBPT0ifQ.XZy1ejuB-5hwsFlyUvc0DoQw3DYN1iBZJptZidhoIzA';
  useEffect(() => {
    apiData
      ? axios
          .get(`https://pfa.foreca.com/api/v1/observation/latest/${apiData.data.id}`, {
            headers: {
              Authorization: `Bearer ${token}`
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
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then(result => setApiData(result))
      : null;
  }, [currentLocation]);

  useEffect(async () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const newUserPos = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      };
      setcurrentLocation(newUserPos);
    });
  }, []);

  console.log('apiData FROM API: ', apiData);
  console.log('weatherData', weatherData);

  const WeatherReport = () => {
    if (!weatherData) return <p>Loading</p>;
    return weatherData.data.observations.map(weather => {
      return (
        <div key={weather.station}>
          <div key={weather.station}>Station: {weather.station}</div>
          <div key={weather.temperature}>Temperature: {weather.temperature}</div>
          <div key={weather.visibility}>Visibility: {weather.visibility}</div>
          <div style={{ marginBottom: 20 }} key={weather.winddir}>
            {weather.winddir}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Title>Home, baby</Title>
      <WeatherReport />
    </div>
  );
}

export default Home;
