import React from 'react';
import City from './City/City.jsx';
import { map } from 'lodash';
import styles from './styles.css';


const CityWeather = [
    {
        city: "London",
        weather: "+23"
    },
    {
        city: "New York",
        weather: "+30"
    },
    {
        city: "Moscow",
        weather: "+14"
    },
  ];

class CityList extends React.Component {  
  render() {
    return (
    <div className = {styles.city_weather}>
        {
        map(CityWeather, item => (
          <City city={item.city} weather={item.weather}></City>
        ))
      }
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