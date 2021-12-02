import React from 'react';
import Title from '../../layout/Typography/Title/Title';
import getLocalData from '../../../api/api';
import WeatherReport from './WeatherReport';

function Home() {
  const weatherData = getLocalData();


  // const WeatherReport = () => {
  //   if (!weatherData) return <p>Loading</p>;
  //   return weatherData.data.observations.map(weather => {
  //     return (
  //       <div key={weather.station}>
  //         <div>Station: {weather.station}</div>
  //         <div>Temperature: {weather.temperature}</div>
  //         <div>Visibility: {weather.visibility}</div>
  //         <div style={{ marginBottom: 20 }}>{weather.winddir}</div>
  //       </div>
  //     );
  //   });
  // };

  return (
    <React.Fragment>
      <Title>Home</Title>
      {/* <WeatherReport /> */}
      <WeatherReport data={weatherData ? weatherData.data.observations[0] : null} />
    </React.Fragment>
  );
}

export default Home;
