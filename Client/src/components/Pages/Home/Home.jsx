import React from 'react';
import Title from '../../layout/Typography/Title/Title';
import getLocalData from '../../../api/api';
import WeatherReport from './WeatherReport';

function Home() {
  const weatherData = getLocalData();

  return (
    <React.Fragment>
      <Title>Home</Title>
      <WeatherReport data={weatherData ? weatherData.data.observations[0] : null} />
    </React.Fragment>
  );
}

export default Home;
