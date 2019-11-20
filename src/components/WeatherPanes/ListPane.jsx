import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from 'assets/css/styles.scss';

import Icon from 'components/reusable/icons/Icon';

class ListPane extends React.PureComponent {
  
  render() {
    const {weatherStateIcon, temperature, icon, location, unit} = this.props;
    return (
      <div className={styles.WeatherListPane}>
        <div className={styles.location}>
          {location}
          <Icon path={icon} />
        </div>
        <div className={styles.temperature}>
          <span className={styles.value}>{temperature}</span>
          <span className={styles.unit}>{unit}</span>
        </div>
        <div className={styles.weatherIcon}>
          <Icon path={weatherStateIcon} />
        </div>
      </div>
    );
  }
}

ListPane.propTypes = {
  location: PropTypes.string.isRequired,
  icon: PropTypes.string,
  temperature: PropTypes.number,
  weatherStateIcon: PropTypes.string,
};

const mapStateToProps = ({TemperatureUnitChangeReducer}, ownProps) => {
  const reducer = TemperatureUnitChangeReducer;
  if(typeof reducer.tempRecountFormula === 'function'){
    return {
      temperature: reducer.tempRecountFormula(+ownProps.temperature),
      unit: reducer.tempUnit.unit
    }
  }
  return {temperature: +ownProps.temperature};
}

export default connect(mapStateToProps)(ListPane);
