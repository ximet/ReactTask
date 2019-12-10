import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchCityWeatherData } from 'actions';
import PropTypes from 'prop-types';
import Icon from 'components/reusable/icons/Icon';
import styles from 'assets/css/styles.scss';
import temperatureIcon from 'assets/images/icons/thermometer.svg';
import cloudIcon from 'assets/images/icons/cloudy.svg';

class City extends React.PureComponent {
  constructor(props){
    super(props);
    this.matchProps =
      this.props.match.params.cityId?
      this.props.match.params:
      {cityId:0}; 
  }

  componentDidMount(){
    this.props.dispatch(fetchCityWeatherData(this.matchProps.cityId));
  }

  render(){
    const { name, temperature, unit, clouds } = this.props;
    return(
      <div className={styles.weatherPaneBig}>
        <div className={styles.paneTitle}>
          <div>{name}</div>
        </div>
        <div className={styles.paneData}>
          <div className={styles.paneDataTab}>
            <Icon path={temperatureIcon} />
            <span className={styles.value}>{temperature}</span>
            <span className={styles.unit}>{unit}</span>
          </div>
          <div className={styles.paneDataTab}>
            <Icon path={cloudIcon} />
            <span className={styles.value}>{clouds}</span>
            <span className={styles.unit}>%</span>
          </div>
        </div>
        <div className={styles.paneBtns}>
          <Link to='/world'><div className={`${styles.btn} ${styles.default}`}>more</div></Link>
        </div>
      </div>
    )
  }
}

City.propTypes = {
  name: PropTypes.string,
  temperature: PropTypes.number,
  unit: PropTypes.string,
  clouds: PropTypes.number,
};

const mapStateToProps = ({ CityWeatherInfoReducer, TemperatureUnitChangeReducer }) => {
  const { cityWeatherData } = CityWeatherInfoReducer;
  const { tempRecountFormula, tempUnit } = TemperatureUnitChangeReducer;
  return {
    name: cityWeatherData.name,
    clouds: cityWeatherData.clouds.all,
    temperature: tempRecountFormula(+cityWeatherData.main.temp),
    unit: tempUnit.unit
  }  
}

export default connect(mapStateToProps)(City);
