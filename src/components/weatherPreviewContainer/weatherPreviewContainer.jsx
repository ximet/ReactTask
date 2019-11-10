import React, { Component } from 'react';
import WeatherPreview from '../weatherPreview/weatherPreview.jsx';

class WeatherPreviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'Minsk',
      temperature: '12+',
    };
  }

  render() {
    const { cityName, temperature } = this.state;
    return (
      <WeatherPreview
        cityName={cityName}
        temperature={temperature} />
    );
  }
}

export default WeatherPreviewContainer;
