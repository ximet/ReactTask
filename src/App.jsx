import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';

import 'normalize.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import {
  API_AUTH_PASS,
  API_AUTH_USERNAME,
  API_FORECAST_DAILY_ENDPOINT,
  API_FORECAST_DETAILED_ENDPOINT,
  API_KIEV_ID,
  THEME_DARK,
  THEME_LIGHT
} from './constants/constants';
import { weatherAPI } from './services/dataService';
import ContentWrapperContainer from './containers/ContentWrapperContainer';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state => state.theme.name);
  // weatherAPI.getToken(API_AUTH_USERNAME, API_AUTH_PASS).then(() => {
  //   weatherAPI.searchLocation('Moscow').then(locations => console.log(locations));
  //   weatherAPI.getCurrentWeather(API_KIEV_ID).then(weather => console.log(weather));
  //   weatherAPI
  //     .getForecast(API_FORECAST_DETAILED_ENDPOINT, API_KIEV_ID)
  //     .then(forecast => console.log(forecast));
  //   weatherAPI
  //     .getForecast(API_FORECAST_DAILY_ENDPOINT, API_KIEV_ID)
  //     .then(forecast => console.log(forecast));
  // });

  return (
    <BrowserRouter>
      <div className={['global-wrapper', `theme-mode_${theme}`].join(' ')}>
        <HeaderWrapper />
        <ContentWrapperContainer />
        <FooterWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
