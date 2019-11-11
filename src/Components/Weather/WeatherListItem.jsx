import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-eva-icons';
import constant from 'data/const';

class WeatherListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      temp: undefined,
    };
  }

  componentDidMount() {
    const location = this.props.location;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${constant.WEATHER_API_KEY}&units=metric`;
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({
        city: json.name,
        temp: json.main.temp,
      });
    });
  }

  render() {
    const isDataLoaded = this.state.city && this.state.temp;
    if (!isDataLoaded) return <div>Loading</div>;
    return (
      <div>
        {this.state.city} - {this.state.temp}°
      </div>
    );
  }
}

WeatherListItem.propTypes = {
  location: PropTypes.string.isRequired,
};

export default WeatherListItem;
