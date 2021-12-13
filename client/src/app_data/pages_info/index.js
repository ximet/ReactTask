import WorldWeather from '../../modules/WorldWeather';
import AboutUs from '../../modules/AboutUs/';
import Home from '../../modules/Home';
import Feedback from '../../modules/Feedback';

export const APP_NAME = 'Weather App';
export const PAGES_INFO = [
  {
    name: 'Home',
    component: Home,
    path: '/',
    exact: true
  },
  {
    name: 'World weather',
    component: WorldWeather,
    path: '/worldWeather',
    exact: false
  },
  {
    name: 'Feedback',
    component: Feedback,
    path: '/feedback',
    exact: false
  },
  {
    name: 'About Us',
    component: AboutUs,
    path: '/aboutUs',
    exact: false
  }
];
