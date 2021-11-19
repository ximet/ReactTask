import React from 'react';
import Title from '../../layout/Typography/Title/Title';
import getLocalData from '../../../api/api';

function Home() {
  const weatherData = getLocalData();

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
