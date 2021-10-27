import React from 'react';

import styles from './TemperatureUnitToggle.module.scss';
import { UNIT_SYMBOLS, DEGREE_SYMBOL } from '../../../constants/units';

function TemperatureUnitToggle({ unit, switchUnit }) {
  const celsiusClasses =
    unit === UNIT_SYMBOLS.celsius ? [styles.unit, styles.active].join(' ') : styles.unit;

  const fahrenheitClasses =
    unit === UNIT_SYMBOLS.fahrenheit ? [styles.unit, styles.active].join(' ') : styles.unit;

  return (
    <div onClick={switchUnit}>
      <span className={celsiusClasses}>
        {DEGREE_SYMBOL}
        {UNIT_SYMBOLS.celsius}
      </span>
      <span> | </span>
      <span className={fahrenheitClasses}>
        {DEGREE_SYMBOL}
        {UNIT_SYMBOLS.fahrenheit}
      </span>
    </div>
  );
}

export default TemperatureUnitToggle;
