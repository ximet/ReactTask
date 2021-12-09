import Home from '../../modules/Home';
import WorldWeather from '../../modules/WorldWeather';
import Feedback from '../../modules/Feedback/';
import AboutUs from '../../modules/AboutUs/';

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
