import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import defImg from '../../../img/broken-image.png';
import styles from './styles.css';


class City extends React.Component {
    constructor(props) {
        super(props);
        this.changeMainCity = this.changeMainCity.bind(this);
      }
      changeMainCity(){
        this.props.onchangeMainCity(this.props.city, this.props.weather);
      }  
      render() {
        return (
            <Link to='/' className = {(this.props.city == this.props.Store.mainCity.city)?
              styles.city_activ : styles.city}
              onClick = {this.changeMainCity}>
                <div className = {styles.title}>
                  <span>
                    {this.props.city}
                  </span>
                </div>
                <div className = {styles.temperature}>
                    <span>{this.props.weather} &#8451;</span>
                    <img src={this.props.weather_img}/>
                </div>
            </Link>
            );
      }
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

City.defaultProps = {
  weather_img: defImg
};
      

export default connect(
    state => ({
      Store: state
    }),
    dispatch => ({
        onchangeMainCity: (city, temperature) => {
        dispatch({ type: 'CHANGE_MAIN_CITY', payload: {city:city, temperature: temperature} })
      }
    })
  )(City);

