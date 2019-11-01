import React from 'react';
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
        <div>
            <p className = {styles.city}> {this.props.city} </p>
            <p className = {styles.temperature}> {this.props.temperature} &#8451; </p>
        </div>
        <Button title="More"></Button>
    </div>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  // weatherBackground:
};

export default Main;