import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityList from '../CityList/CityList';
import Alert from '../common/Alert';
import { getTemperaturesByCityNames } from '../../services/weatherService';

const CITY_NAMES = ['London', 'New York', 'Moscow'];

export default class CityListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: null,
      errorMessage: '',
    };
  }

  componentDidMount() {
    getTemperaturesByCityNames(CITY_NAMES)
      .then((cities) => this.setState({ cities }))
      .catch((e) => this.setState({ errorMessage: e.message }));
  }

  render() {
    const { cities, errorMessage } = this.state;
    const { nav } = this.props;

    return (
      <div>
        {errorMessage && <Alert>{errorMessage}</Alert>}
        {cities && (
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <CityList cities={cities} />
            <div style={{ display: 'grid', justifySelf: 'end' }}>{nav}</div>
          </div>
        )}
      </div>
    );
  }
}

CityListPage.propTypes = {
  nav: PropTypes.object.isRequired,
};
