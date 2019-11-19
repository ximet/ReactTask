import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.css';


class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.changeMain = this.changeMain.bind(this);
  }
  changeMain(){
    this.props.onChangeMain(!this.props.weatherMain.main.mainState);
  }  
  render() {
    return (
      <div className = {styles.button}>
        <button onClick = {this.changeMain}> {this.props.title} </button>      
      </div>
      );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    weatherMain: state
  }),
  dispatch => ({
    onChangeMain: (trackName) => {
      dispatch({ type: 'CHANGE_MAIN', payload: trackName })
    }
  })
)(Button);