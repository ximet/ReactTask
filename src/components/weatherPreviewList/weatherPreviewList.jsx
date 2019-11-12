import React, { Component } from 'react';
import WeatherPreviewRow from '../weatherPreviewRow/weatherPreviewRow.jsx';

// eslint-disable-next-line no-unused-vars
const GetCitiesListWithWeather = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve([
    {
      cityName: 'Minsk',
      temperature: '12+',
      id: 1,
    },
    {
      cityName: 'Not Minsk',
      temperature: 'Not 12+',
      id: 2,
    },
  ]), 1000);
});


class WeatherPreviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesListWithWeather: [],
    };
  }

  componentDidMount() {
    GetCitiesListWithWeather().then(
      (citiesListWithWeather) => this.setState({ citiesListWithWeather }),
    );
  }

  render() {
    const { citiesListWithWeather } = this.state;
    return (
      <ul>
        {
          citiesListWithWeather.length ? (
            citiesListWithWeather.map((city) => (
              <li key={city.id}>
                <WeatherPreviewRow
                  cityName={city.cityName}
                  temperature={city.temperature} />
              </li>
            ))) : (<li><p>Nothing to show ☹</p></li>)
        }
      </ul>
    );
  }
}

export default WeatherPreviewList;
