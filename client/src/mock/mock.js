import sunAndCloudsIcon from '../../public/images/weatherIcon/sunAndCloudsIcon.png';
import snowingIcon from '../../public/images/weatherIcon/snowingIcon.png';
import thunderstormIcon from '../../public/images/weatherIcon/thunderstormIcon.png';
import moonAndCloudsIcon from '../../public/images/weatherIcon/moonAndCloudsIcon.png';

const dailyForecasts = [
  {
    id: 'sdfsdfdsf',
    weekDay: 'mon',
    date: 14,
    conditions: 'party cloudy',
    temperature: 12,
    icon: sunAndCloudsIcon
  },
  {
    id: 'sdfsdfdsfewfewf',
    weekDay: 'mon',
    date: 15,
    conditions: 'party cloudy',
    temperature: 42,
    icon: snowingIcon
  },
  {
    id: 'sdfsdfdsreeff',
    weekDay: 'mon',
    date: 16,
    conditions: 'party cloudy',
    temperature: 9,
    icon: thunderstormIcon
  },
  {
    id: 'sdferfresdfdsf',
    weekDay: 'mon',
    date: 17,
    conditions: 'party cloudy',
    temperature: 13,
    icon: sunAndCloudsIcon
  },
  {
    id: 'sdfsdffreffcdsf',
    weekDay: 'mon',
    date: 18,
    conditions: 'party cloudy',
    temperature: 16,
    icon: moonAndCloudsIcon
  },
  {
    id: 'sdfsdfdsf8loiloi',
    weekDay: 'mon',
    date: 19,
    conditions: 'party cloudy',
    temperature: 19,
    icon: sunAndCloudsIcon
  },
  {
    id: 'sdfsdfdsftgj4vf',
    weekDay: 'mon',
    date: 20,
    conditions: 'party cloudy',
    temperature: 21,
    icon: thunderstormIcon
  },
  {
    id: 'sdfsdfdsfejfwcoji',
    weekDay: 'mon',
    date: 21,
    conditions: 'party cloudy',
    temperature: 28,
    icon: sunAndCloudsIcon
  },
  {
    id: 'sdfsdfdsfekf3ekcw',
    weekDay: 'mon',
    date: 22,
    conditions: 'party cloudy',
    temperature: 15,
    icon: snowingIcon
  },
  {
    id: 'sdfsdfdsfwdixchewcui',
    weekDay: 'mon',
    date: 23,
    conditions: 'party cloudy',
    temperature: 14,
    icon: thunderstormIcon
  }
];

const hourlyForecasts = [
  {
    id: 'sdfsdfdsfepcjrqecj3',
    time: '00:00',
    temperature: 12,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsdfdsorevjof',
    time: '01:00',
    temperature: 13,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsdfdfvkdnfvkjresf',
    time: '02:00',
    temperature: 14,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsdfvlmoirnvoidsf',
    time: '03:00',
    temperature: 5,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsdfoirejoviredsf',
    time: '04:00',
    temperature: 6,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsdferovknredsf',
    time: '05:00',
    temperature: 7,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfeorvmfecrvosdfdsf',
    time: '06:00',
    temperature: 12,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsvnervorendfdsf',
    time: '07:00',
    temperature: 12,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'revrejvnnsdfsdfdsf',
    time: '08:00',
    temperature: 32,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfeporek89sdfdsf',
    time: '09:00',
    temperature: 13,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsdfdgfrmlevsf',
    time: '10:00',
    temperature: 17,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'sdfsdfdsgkjvbnf',
    time: '11:00',
    temperature: 31,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    id: 'srevrebvirebvndfsdfdsf',
    time: '12:00',
    temperature: 7,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  }
];

const currentCityData = {
  city: 'Minsk',
  wind: 7,
  humidity: 50,
  feels: 5,
  pressure: 1000,
  temperature: 7,
  conditions: 'clear',
  time: '20:00',
  weekDay: 'Monday',
  day: 29,
  month: 'September',
  year: 2021
};

export { dailyForecasts, hourlyForecasts, currentCityData };
