import React from 'react';
import { connect } from 'react-redux'
import City from './City/City.jsx';
import Button from '../Main/Button/Button.jsx';
import weatherImg1 from '../../img/weather_1.png';
import weatherImg2 from '../../img/weather_2.png';
import weatherImg3 from '../../img/cloud.png';
import styles from './styles.css';


class CityList extends React.Component {  
  render() {
    return (
    <div className = {styles.city_weather}>
      {
        this.props.Store.cityList.map(function(item) {
          return <City 
                    key={item.key} 
                    city={item.city} 
                    weather={item.weather} 
                    weather_img={ item.weather.substring(1) > 12 ? (item.weather.substring(1) > 17 ?  weatherImg1 : weatherImg2) : weatherImg3 }
                  />;
        })
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

// export default CityList;

export default connect(
  state => ({
    Store : state
  }),
  dispatch => ({})
)(CityList);