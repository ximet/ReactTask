import React from 'react'
import classes from './currentWeather.module.css'
import sunny from '../../../../public/static/photos/weather/sunny.png'

function CurrentWeather() {
    return (
        <div className={classes.container}>
            <div className={classes.weatherIcon}>
                <i className="fas fa-sun"></i>
            </div>
            <div className={classes.weatherInfo}>
                <div className={classes.temperature}>
                    <span>21°C</span>
                </div>
                <div className={classes.weatherInfoItem}>
                    <span>time: 12 00</span>
                </div>
                <div className={classes.weatherInfoItem}>
                    <span>humidity: 50%</span>
                </div>
                <div className={classes.weatherInfoItem}>
                    <span>wind: 21m/s</span>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
