import React from 'react';
import styles from 'assets/css/styles.css';
// pages
import YourLocation from 'components/pages/YourLocation';
import World from 'components/pages/World';
// icons
import cloudyIcon from 'assets/images/icons/cloudy.svg';
import sunnyIcon from 'assets/images/icons/sunny.svg';

const WeatherInfo = [{
    location: 'Minsk',
    weatherState: 'cloudy',
    weatherStateIcon: sunnyIcon,
    temperature: '-2'
  },
  {
    location: 'NY',
    weatherState: 'sunny',
    weatherStateIcon: cloudyIcon,
    temperature: '5'
  },
  {
    location: 'Warsaw',
    weatherState: 'rain',
    weatherStateIcon: cloudyIcon,
    temperature: '0'
  },
  {
    location: 'South Pole',
    icon: require('assets/images/icons/penguin.svg'),
    weatherState: 'cloudy',
    weatherStateIcon: sunnyIcon,
    temperature: '-30'
  },
]
const CurrentLocation='Minsk';
const CurrentLocationWeather = WeatherInfo.find((element)=>element.location==CurrentLocation);

class Main extends React.Component {
  render() {
    return ( 
      <main className={styles.appMain}>    
          <YourLocation {...CurrentLocationWeather}/>      
          <World WeatherInfo={WeatherInfo}/>
      </main> 
    );
  }
}
  
export default Main;
