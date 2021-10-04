import React from 'react';
import axios from 'axios';

class WeatherForecast extends React.Component {
  render() {
    return <div>Main content</div>;
  }

  componentDidMount() {
    const instance = axios.create({
      baseURL: '/api'
    });
    
    instance({
      method: 'POST',
      url: '/authorize/token',
      data: {
        user: process.env.WEATHER_API_USER,
        password: process.env.WEATHER_API_PASSWORD
      }
    }).then(res => {
      console.log(res);
    });
  }
}

export default WeatherForecast;
