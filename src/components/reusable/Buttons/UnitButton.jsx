import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTemperatureUnit } from 'actions';
import styles from 'assets/css/styles.scss';

class UnitButton extends React.PureComponent {
  constructor(props) {
    super(props);    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch({ ...changeTemperatureUnit, tempUnit: this.props });
  }

  render() {
    return (
      <div 
        className={styles.unitBtn}
        onClick={this.handleClick}
      >
        {this.props.unit}
      </div>
    );
  }
}

UnitButton.propTypes = {
  value: PropTypes.string,
  unit: PropTypes.string,
  name: PropTypes.string,
};

export default connect()(UnitButton);
