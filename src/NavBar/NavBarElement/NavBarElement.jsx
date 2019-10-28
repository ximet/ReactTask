import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

// import logo from '../../img/weather_1.png';

class NavBarElement extends React.Component {
  render() {
    return (
    <div className = {styles.element}>
        {this.props.title}
        <img src={this.props.image} className = {styles.image}/>
    </div>
    );
  }
}

NavBarElement.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NavBarElement;