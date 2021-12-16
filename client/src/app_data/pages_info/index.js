import WorldWeather from '../../modules/WorldWeather';
import AboutUs from '../../modules/AboutUs/';
import Home from '../../modules/Home';
import Feedback from '../../modules/Feedback';
import PinDropSharpIcon from '@mui/icons-material/PinDropSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';

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
export const DETAILS = [
  {
    title: 'Find us at the office',
    text: 'Bld Mihail Kogalniceanu, nr. 8, \n 7652 Bucharest, \n Romania',
    iconName: <PinDropSharpIcon />
  },
  {
    title: 'Give us a ring',
    text: 'Michael Jordan \n +40 762 321 762 \n Mon - Fri, 8:00-22:00',
    iconName: <LocalPhoneSharpIcon />
  },
  {
    title: 'Legal Information',
    text:
      'Creative Tim Ltd. \n VAT · EN2341241 \n IBAN · EN8732ENGB2300099123 \n Bank · Great Britain Bank',
    iconName: <BusinessCenterSharpIcon />
  }
];
