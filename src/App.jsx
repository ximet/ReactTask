import React from 'react';

import { getCurrentWeatherInfo, getHourlyWeatherInfo, getDailyWeatherInfo } from './API/api';
import { getLocation } from './Utils/geoLocator';

function App() {
  return (
    <div>
      <button onClick={getCurrentWeatherInfo}>Click me for current weather</button>
      <button onClick={getHourlyWeatherInfo}>Click me for hourly weather</button>
      <button onClick={getDailyWeatherInfo}>Click me for daily weather</button>
    </div>
  );
}

export default App;
