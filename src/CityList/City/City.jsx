import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';


function City (props) {
    return (
    <div className = {styles.city}>
        <p>{props.city}</p>
        <p>{props.weather}</p>
    </div>
    );
}

City.propTypes = {
    title: PropTypes.string.isRequired,
    // image:
}

// NavBarElement.defaultProps = {
//   title: 'Problem'
// };

export default City;