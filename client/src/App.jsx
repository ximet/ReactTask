import React from 'react';

import {
  getCurrentWeatherInfo,
  getHourlyWeatherInfo,
  getDailyWeatherInfo,
  getToken
} from './API/api';

function App() {
  return (
    <div>
      <button onClick={getCurrentWeatherInfo}>Click me for current weather</button>
      <button onClick={getHourlyWeatherInfo}>Click me for hourly weather</button>
      <button onClick={getDailyWeatherInfo}>Click me for daily weather</button>
      <button onClick={getToken}>Click me to generate Token</button>
      <br />
    </div>
  );
}

export default App;
