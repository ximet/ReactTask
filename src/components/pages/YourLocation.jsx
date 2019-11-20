import React from 'react';
import {connect} from 'react-redux';
import {getLocationWeatherInfo} from 'actions';
import Icon from 'components/reusable/icons/Icon';
import styles from 'assets/css/styles.scss';

class YourLocation extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch({
      ...getLocationWeatherInfo,
      location: 'Minsk'
    });
  }

  render(){
    const {weatherStateIcon, temperature, icon, location, unit} = this.props;
    
    return(
      <div className={styles.weatherPaneBig}>
        <div className={styles.paneTitle}>
          <div>{location}</div>
          <Icon path={icon} />
        </div>
        <div className={styles.paneData}>
          <Icon path={weatherStateIcon} />
          <div className={styles.temperature}>
            <span className={styles.value}>{temperature}</span>
            <span className={styles.unit}>{unit}</span>
          </div>
        </div>
        <div className={styles.paneBtns}>
          <div className={`${styles.btn} ${styles.default}`}>more</div>
        </div>
      </div>
    )
  }
}  

const mapStateToProps = ({TemperatureUnitChangeReducer, LocationWeatherInfoReducer}) => {
  return {
    weatherStateIcon: LocationWeatherInfoReducer.locationWeatherInfo.weatherStateIcon,
    icon: LocationWeatherInfoReducer.locationWeatherInfo.icon,
    location: LocationWeatherInfoReducer.locationWeatherInfo.location,
    temperature: TemperatureUnitChangeReducer.tempRecountFormula(+LocationWeatherInfoReducer.locationWeatherInfo.temperature),
    unit: TemperatureUnitChangeReducer.tempUnit.unit
  }
}

export default connect(mapStateToProps)(YourLocation);
