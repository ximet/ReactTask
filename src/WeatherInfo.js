import cloudyIcon from 'assets/images/icons/cloudy.svg';
import sunnyIcon from 'assets/images/icons/sunny.svg';

const WeatherInfo = [{
  location: 'Minsk',
  weatherState: 'sunny',
  weatherStateIcon: sunnyIcon,
  temperature: '-2'
},
{
  location: 'NY',
  weatherState: 'cloudy',
  weatherStateIcon: cloudyIcon,
  temperature: '5'
},
{
  location: 'Warsaw',
  weatherState: 'cloudy',
  weatherStateIcon: cloudyIcon,
  temperature: '0'
},
{
  location: 'South Pole',
  icon: require('assets/images/icons/penguin.svg'),
  weatherState: 'sunny',
  weatherStateIcon: sunnyIcon,
  temperature: '-30'
},
]

export default WeatherInfo