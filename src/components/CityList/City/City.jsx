import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';


function City (props) {
    return (
    <div className = {styles.city}>
        <div className = {styles.title}><span>{props.city}</span></div>
        <div className = {styles.temperature}>
            <span>{props.weather} &#8451;</span>
            <img src={props.weather_img}/>
        </div>
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