import React from 'react';
import City from './City/City.jsx';
import Button from '../Main/Button/Button.jsx';
import { map } from 'lodash';
import styles from './styles.css';

import weatherImg1 from '../img/weather_1.png';
import weatherImg2 from '../img/weather_2.png';
import weatherImg3 from '../img/cloud.png';


const CityWeather = [{
    key: 1,
    city: "London",
    weather: "+23",
  },
  {
    key: 4,
    city: "Seoul",
    weather: "+18",
  },
  {
    key: 5,
    city: "Tokyo",
    weather: "+17",
  },
  {
    key: 6,
    city: "Istanbul",
    weather: "+25",
  },
  {
    key: 7,
    city: "Kuala Lumpur,",
    weather: "+26",
  },
  {
    key: 8,
    city: "Singapore",
    weather: "+16",
  },
  {
    key: 9,
    city: "Dubai",
    weather: "+22",
  },
  {
    key: 2,
    city: "New York",
    weather: "+30",
  },
  {
    key: 3,
    city: "Moscow",
    weather: "+10",
  },
];

class CityList extends React.Component {  
  render() {
    return (
    <div className = {styles.city_weather}>

      {
        map(CityWeather, item => (
          <City key={item.key} city={item.city} weather={item.weather} weather_img={ item.weather.substring(1) > 12 ? (item.weather.substring(1) > 17 ?  weatherImg1 : weatherImg2) : weatherImg3 }></City>
        ))
      }
        
      <Button title="Back"></Button>
    </div>
    );
  }
}

// CityList.propTypes = {
//   city: PropTypes.string.isRequired,
//   temperature: PropTypes.string.isRequired,
//   // weatherBackground:
// };

export default CityList;