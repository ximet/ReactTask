import React from 'react';
import { connect } from 'react-redux'
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
            <div className = {styles.city} onClick = {this.changeMainCity}>
                <div className = {styles.title}><span>{this.props.city}</span></div>
                <div className = {styles.temperature}>
                    <span>{this.props.weather} &#8451;</span>
                    <img src={this.props.weather_img}/>
                </div>
            </div>
            );
      }
    }
      

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

