import WorldWeather from '../../modules/WorldWeather';
import AboutUs from '../../modules/AboutUs/';
import Home from '../../modules/Home';
import Feedback from '../../modules/Feedback';
import PinDropSharpIcon from '@mui/icons-material/PinDropSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import ThermostatSharpIcon from '@mui/icons-material/ThermostatSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import FilterDramaSharpIcon from '@mui/icons-material/FilterDramaSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import BeachAccessSharpIcon from '@mui/icons-material/BeachAccessSharp';

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
export const ABOUT_US = {
  paragraphText:
    "WeatherApp are Romanian's largest private weather service. We access information from\n" +
    '              the BOM and other sources, and interpret and supplement it with our own highly\n' +
    '              qualified meteorologists and forecasting models. We are passionate about understanding\n' +
    '              the weather and its effect on day to day lives. We can’t change the weather, but we\n' +
    '              can warn you of what’s going to happen so that you can stay safe and plan your work\n' +
    '              and leisure time effectively. With our dynamic and easy to read weather information at\n' +
    '              your fingertips, you can take the guesswork out of your day and be prepared!\n' +
    '              WeatherApp and The Weather Company were established in September 1998, initially in\n' +
    '              response to a demand from television broadcasters for more sophisticated weather\n' +
    "              programming. We are Romanian's leading commercial weather information provider to\n" +
    '              media and internet organisations and companies of all sizes and industries, including\n' +
    '              energy, agriculture, government, mining, recreation, education and retail. Our\n' +
    '              commercial services provide customised data to customers in a variety of formats, from\n' +
    '              specialised forecasts, proactive alerts, TV or web-ready graphics and scripts. For\n' +
    '              more information on our services and business products please visit our WeatherApp for\n' +
    '              Business Website. We collect anonymous statistics from our apps and websites in order\n' +
    '              to better understand our users and improve our products. See real temperature on our\n' +
    '              app and be ready for all your life.',
  sloganDetails: [
    {
      text: 'See',
      iconName: <ThermostatSharpIcon />
    },
    {
      text: 'Real',
      iconName: <AcUnitSharpIcon />
    },
    {
      text: 'Temperature',
      iconName: <NightsStaySharpIcon />
    },
    {
      text: 'On',
      iconName: <FilterDramaSharpIcon />
    },
    {
      text: 'Our',
      iconName: <WbSunnySharpIcon />
    },
    {
      text: 'App',
      iconName: <BeachAccessSharpIcon />
    }
  ]
};
export const COUNTRIES_TO_SEARCH = [
  {
    name: 'Paris',
    lon: 2.348799944,
    lat: 48.853408813
  },
  {
    name: 'London',
    lon: -0.125532746,
    lat: 51.508415222
  },
  {
    name: 'Beijing',
    lon: 116.397232056,
    lat: 39.907497406
  },
  {
    name: 'Tokyo',
    lon: 139.691680908,
    lat: 35.689525604
  }
  // {
  //   name: 'Rome',
  //   lon: 12.483333588,
  //   lat: 41.900001526
  // },
  // {
  //   name: 'Washington',
  //   lon: -77.036369324,
  //   lat: 38.895111084
  // },
  // {
  //   name: 'Berlin',
  //   lon: 13.399999619,
  //   lat: 52.516666412
  // },
  // {
  //   name: 'Buenos Aires',
  //   lon: -58.408813477,
  //   lat: -34.576126099
  // },
  // {
  //   name: 'Bangkok',
  //   lon: 100.516670227,
  //   lat: 13.75
  // },
  // {
  //   name: 'Vilnius',
  //   lon: 25.316667557,
  //   lat: 54.683334351
  // },
  // {
  //   name: 'Cape Town',
  //   lon: 18.416666031,
  //   lat: -33.916667938
  // },
  // {
  //   name: 'Wellington',
  //   lon: 174.776641846,
  //   lat: -41.27853775
  // },
  // {
  //   name: 'Oslo',
  //   lon: 10.738921165,
  //   lat: 59.913246155
  // },
  // {
  //   name: 'Riga',
  //   lon: 24.100000381,
  //   lat: 56.950000763
  // },
  // {
  //   name: 'Panama City',
  //   lon: -79.533332825,
  //   lat: 8.966667175
  // },
  // {
  //   name: 'Amsterdam',
  //   lon: 4.899902344,
  //   lat: 52.373085022
  // },
  // {
  //   name: 'Stockholm',
  //   lon: 18.064903259,
  //   lat: 59.332576752
  // },
  // {
  //   name: 'Ottawa',
  //   lon: -75.690284729,
  //   lat: 45.420940399
  // },
  // {
  //   name: 'Moscow',
  //   lon: 37.61555481,
  //   lat: 55.752223969
  // },
  // {
  //   name: 'Sofia',
  //   lon: 23.324146271,
  //   lat: 42.69751358
  // },
  // {
  //   name: 'Minsk',
  //   lon: 27.566667557,
  //   lat: 53.900001526
  // },
  // {
  //   name: 'Warsaw',
  //   lon: 21,
  //   lat: 52.25
  // },
  // {
  //   name: 'Madrid',
  //   lon: -3.70256424,
  //   lat: 40.416503906
  // },
  // {
  //   name: 'Berne',
  //   lon: 7.447443008,
  //   lat: 46.948093414
  // }
];
