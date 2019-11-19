import React from 'react';
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
    city: "Minsk",
    temperature: "+15"
}

export default City;