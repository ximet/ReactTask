import sunAndCloudsIcon from '../../public/images/weatherIcon/sunAndCloudsIcon.png';
import snowingIcon from '../../public/images/weatherIcon/snowingIcon.png';
import thunderstormIcon from '../../public/images/weatherIcon/thunderstormIcon.png';
import moonAndCloudsIcon from '../../public/images/weatherIcon/moonAndCloudsIcon.png';

const dailyForecasts = [
  {
    weekDay: 'mon',
    date: 14,
    conditions: 'party cloudy',
    temperature: 12,
    icon: sunAndCloudsIcon
  },
  {
    weekDay: 'mon',
    date: 15,
    conditions: 'party cloudy',
    temperature: 42,
    icon: snowingIcon
  },
  {
    weekDay: 'mon',
    date: 16,
    conditions: 'party cloudy',
    temperature: 9,
    icon: thunderstormIcon
  },
  {
    weekDay: 'mon',
    date: 17,
    conditions: 'party cloudy',
    temperature: 13,
    icon: sunAndCloudsIcon
  },
  {
    weekDay: 'mon',
    date: 18,
    conditions: 'party cloudy',
    temperature: 16,
    icon: moonAndCloudsIcon
  },
  {
    weekDay: 'mon',
    date: 19,
    conditions: 'party cloudy',
    temperature: 19,
    icon: sunAndCloudsIcon
  },
  {
    weekDay: 'mon',
    date: 20,
    conditions: 'party cloudy',
    temperature: 21,
    icon: thunderstormIcon
  },
  {
    weekDay: 'mon',
    date: 21,
    conditions: 'party cloudy',
    temperature: 28,
    icon: sunAndCloudsIcon
  },
  {
    weekDay: 'mon',
    date: 22,
    conditions: 'party cloudy',
    temperature: 15,
    icon: snowingIcon
  },
  {
    weekDay: 'mon',
    date: 23,
    conditions: 'party cloudy',
    temperature: 14,
    icon: thunderstormIcon
  }
];

const hourlyForecasts = [
  {
    time: '00:00',
    temperature: 12,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '01:00',
    temperature: 13,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '02:00',
    temperature: 14,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '03:00',
    temperature: 5,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '04:00',
    temperature: 6,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '05:00',
    temperature: 7,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '06:00',
    temperature: 12,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '07:00',
    temperature: 12,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '08:00',
    temperature: 32,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '09:00',
    temperature: 13,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '10:00',
    temperature: 17,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '11:00',
    temperature: 31,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  },
  {
    time: '12:00',
    temperature: 7,
    icon: thunderstormIcon,
    windSpeed: 25,
    humidity: 35
  }
];

export { dailyForecasts, hourlyForecasts };
