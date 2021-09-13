import React from 'react'
import classes from './dayWeatherBox.module.css'

function DayWeatherBox() {
    return (
        <div className={classes.container}>
            <div className={classes.dayWeatherHeader}>
                <div className={classes.weatherIcon}>
                    <i className="fas fa-sun"></i>
                </div>
                <span className={classes.date}>monday 13</span>
            </div>
            <span className>21°C</span>
        </div>
    )
}

export default DayWeatherBox
