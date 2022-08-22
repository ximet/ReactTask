import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';

import HomePage from './Components/HomePage/HomePage';
import DetailedForecastPage from './Components/DetailedForesastPage/DetailedForecastPage';
import FindLocation from './Components/FindLocationPage/FindLocationPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import NavigationPanel from './Components/NavigationPanel/NavigationPanel';


ReactDOM.render(
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
    </BrowserRouter>,
  document.getElementById('app')
);
