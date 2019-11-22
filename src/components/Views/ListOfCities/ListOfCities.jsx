import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WeatherService } from '../../../services/weather';
import Button from '../../UI/Button/Button';
import { setCitiesWeather } from '../../../redux/actions/weatherActions';
import styles from './ListOfCities.scss';

class ListOfCities extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setCitiesWeather();
  }

  setCitiesWeather() {
    const { _setCitiesWeather, cities } = this.props;
    if (cities.length === 0) {
      WeatherService().getGroupWeather()
        .then(({ data }) => {
          const citiesList = data.list.map(({ name, main, weather }, index) => ({
            id: index,
            name,
            temp: main.temp,
            weatherIcon: weather[0].icon,
          }));
          _setCitiesWeather(citiesList);
        });
    }
  }

  render() {
    const { cities } = this.props;
    const { history } = this.props;
    return (
      <>
        <h1 className={styles.title}>Select city</h1>
        <div className={styles.citiesList}>
          { cities && cities.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={styles.cityDetail}
              onClick={() => history.push(`/city/${index}`)}
            >
              <h2 className={styles.cityName}>
                {item.name}
              </h2>
              <span className={styles.temperature}>
                {Math.round(item.temp)}
                &nbsp; &#8451;
              </span>
            </button>
          ))}
        </div>

        <Button
          onClick={() => history.push('/')}
        >
          Back
        </Button>
      </>
    );
  }
}

const mapStateToProps = ({ cities }) => ({
  cities,
});

const mapDispatchToProps = (dispatch) => ({
  _setCitiesWeather: (value) => dispatch(setCitiesWeather(value)),
});

ListOfCities.propTypes = {
  history: PropTypes.func,
  cities: PropTypes.arrayOf,
  _setCitiesWeather: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListOfCities));
