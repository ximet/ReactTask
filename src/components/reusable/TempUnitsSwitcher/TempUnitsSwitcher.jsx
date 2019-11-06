import React from 'react';
import PropTypes from 'prop-types';
import styles from 'assets/css/styles.css';

import Store from 'Store';

const tempUnits = [{
  name: 'Kelvin',
  unit: 'K°',
  value: 'K'
}, {
  name: 'Celsius',
  unit: 'C°',
  value: 'C'
}, {
  name: 'Fahrenheit',
  unit: 'F',
  value: 'F'
}]


class TempUnitsSwitcher extends React.PureComponent {
  constructor(props){
    super();
    this.unitBtns = tempUnits.map((el, i)=>
      <UnitBtn key={i.toString()} {...el} />
    )
  }
  render() {
    return (
      <div className={styles.unitSwitcherWrapper}>
        <div className={styles.unitSwitcher}>
          {this.unitBtns}
        </div>
      </div>
    );
  }
}

class UnitBtn extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Store.dispatch({
      value:this.props,
      type:'SET_TEMP_UNIT'
    })
  }

  render() {
    return (
      <div 
        data-tempunitvalue = {this.props.value}
        className={styles.unitBtn}
        onClick={this.handleClick}>
        {this.props.unit}
      </div>
    );
  }
}

UnitBtn.propTypes = {
  value: PropTypes.string,
  unit: PropTypes.string,
  name: PropTypes.string,
};


export default TempUnitsSwitcher;