import React from 'react';
import CurrentWeather from './currentWeather/CurrentWeather';
import DayWeatherBox from './dayWeatherBox/DayWeatherBox';
import classes from './home.module.css';
import HourSlider from './hourSlider/HourSlider';

const city = 'Minsk';
const title = `Weather in ${city}`

function Home() {
  return (
    <div className={classes.homePageContainer}>
        <div className={classes.content}>
            <div className={classes.titleContainer}>
                <h3>{title}</h3>
            </div>
            <div className={classes.todayWeatherInfoContainer}>
                <CurrentWeather/>
                <HourSlider/>
            </div>
            <div className={classes.dayWeathers}>
              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>

              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>
              <DayWeatherBox/>
            </div>
        </div>
    </div>
  )
  
}

export default Home;
