import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import store from './Store/store';
import { Provider } from 'react-redux';

import HomePage from './Components/Pages/HomePage/HomePage';
import DetailedForecastPage from './Components/Pages/DetailedForesastPage/DetailedForecastPage';
import FindLocation from './Components/Pages/FindLocationPage/FindLocationPage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import ContactPage from './Components/Pages/ContactPage/ContactPage';
import NavigationPanel from './Components/NavigationPanel/NavigationPanel';

ReactDOM.render(
  <Provider store={store}>
    <h2 style={{ color: 'blue' }}>HappyWeather</h2>
    <BrowserRouter>
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detailedForecast" element={<DetailedForecastPage />} />
        <Route path="findLocation" element={<FindLocation />} />
        <Route path="findLocation/:locationId" element={<FindLocation />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<p>Invalid route!</p>} />
      </Routes>
    </BrowserRouter>
    <footer style={{ fontSize: '12px', marginTop: '10px' }}>© 2022 HappyWeather</footer>
  </Provider>,
  document.getElementById('app')
);
