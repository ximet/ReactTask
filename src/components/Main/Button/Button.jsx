import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.css';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changeMain = this.changeMain.bind(this);
  }
  changeMain(){
    this.props.onChangeMain(!this.props.Store.main.mainState);
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
    Store: state
  }),
  dispatch => ({
    onChangeMain: (trackName) => {
      dispatch({ type: 'CHANGE_MAIN', payload: trackName })
    }
  })
)(Button);