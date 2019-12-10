import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Icon from 'components/reusable/icons/Icon';
import styles from 'assets/css/styles.scss';
import temperatureIcon from 'assets/images/icons/thermometer.svg';

function ListPane(props){
  const { name, id, unit, temperature } = props;

  return (
    <Link to={`/world/${id}`} className={styles.WeatherListPane}>
      <div className={styles.location}>{name}</div>
      <div className={styles.temperature}>
        <Icon path={temperatureIcon} />
        <span className={styles.value}>{temperature}</span>
        <span className={styles.unit}>{unit}</span>
      </div>
    </Link>
  );
}

ListPane.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  unit: PropTypes.string,
  temperature: PropTypes.number,
};

const mapStateToProps = ({ TemperatureUnitChangeReducer }, ownProps) => {
  const reducer = TemperatureUnitChangeReducer;
  if(typeof reducer.tempRecountFormula === 'function'){
    return {
      temperature: reducer.tempRecountFormula(+ownProps.main.temp),
      unit: reducer.tempUnit.unit
    }
  }
  return {temperature: +ownProps.main.temp};
}

export default connect(mapStateToProps)(ListPane);
