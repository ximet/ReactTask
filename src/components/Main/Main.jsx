import React from 'react';
import { connect } from 'react-redux'
import Button from './Button/Button.jsx';
import styles from './styles.css';

// import Background from '../img/weath.jpg';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.backImg = {
      backgroundImage: `url(${this.props.weatherBackground})`
    };
  }
  
  render() {
    return (
    <div className = {styles.main} style={ this.backImg }>
        
            <p className = {styles.city}> {this.props.Store.mainCity.city} </p>
            <p className = {styles.temperature}> {this.props.Store.mainCity.temperature} &#8451; </p>
      
        {/* <Button title="More"/> */}
    </div>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  // weatherBackground:
};

export default connect(
  state => ({
    Store: state
  }),
  dispatch => ({})
)(Main);