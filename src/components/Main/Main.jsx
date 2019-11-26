import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Button from './Button/Button.jsx';
import defImg from '../../img/broken-image.png';
import styles from './styles.css';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.backImg = {
      backgroundImage: `url(${this.props.weatherBackground})`,
    };
  }
  
  render() {
    return (
    <div className = {styles.main} style={ this.backImg }>
            <p className = {styles.city}> {this.props.Store.mainCity.city} </p>
            <p className = {styles.temperature}> {this.props.Store.mainCity.temperature} &#8451; </p>
      {/* Добавить ссылки и переходы по кнопке */}
        <Button title="More"/> 
    </div>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

Main.defaultProps = {
  weatherBackground: defImg
};

export default connect(
  state => ({
    Store: state
  }),
  dispatch => ({})
)(Main);