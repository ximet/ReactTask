import React from 'react';
import { connect } from 'react-redux';
import UnitButton from 'components/reusable/Buttons/UnitButton';
import styles from 'assets/css/styles.scss';

const tempUnits = [{
    name: 'Kelvin',
    unit: 'K°',
    value: 'K',
  },
  {
    name: 'Celsius',
    unit: 'C°',
    value: 'C',
  },
  {
    name: 'Fahrenheit',
    unit: 'F',
    value: 'F',
  },
]

function TempUnitsSwitcher(){
  return (
    <div className={styles.unitSwitcherWrapper}>
      <div className={styles.unitSwitcher}>
        {tempUnits.map((el) => <UnitButton key={el.name} {...el} />)}
      </div>
    </div>
  );
}

export default connect()(TempUnitsSwitcher);
