import React from 'react';
import styles from './styles.css';

import { connect } from 'react-redux'

class Button extends React.PureComponent {
  changeMain(){
    this.props.onChangeMain(!this.props.weatherMainStore.main.mainState);
  }
  render() {
    return (
      <div className = {styles.button}>
        <button onClick = {this.changeMain.bind(this)}> {this.props.title} </button>      
      </div>
      );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    weatherMainStore: state
  }),
  dispatch => ({
    onChangeMain: (trackName) => {
      dispatch({ type: 'CHANGE_MAIN', payload: trackName })
    }
  })
)(Button);