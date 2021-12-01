import Home from '../../components/Home';
import WorldWeather from '../../components/WorldWeather';
import Feedback from '../../components/Feedback/';
import AboutUs from '../../components/AboutUs/';

export const app_name = 'Weather App';
export const pages_info = [
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
