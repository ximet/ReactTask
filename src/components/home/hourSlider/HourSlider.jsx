import React from 'react'
import classes from './hourSlider.module.css'

function HourSlider() {
    return (
        <div className={classes.container}>
            <input className={classes.slider} type="range" min="0" max="24" step="4"/>
            <ul className={classes.hourRange}>
                <li>00:00</li>
                <li>04:00</li>
                <li>08:00</li>
                <li>12:00</li>
                <li>16:00</li>
                <li>20:00</li>
                <li>24:00</li>
            </ul>
        </div>
        
    )
}

export default HourSlider
