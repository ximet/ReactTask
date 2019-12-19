import React from 'react';
import cities from '../../../assets/cities';

const forecastCitiesURL = process.env.FORECAST_CITIES_URL;
const openWeatherKey= process.env.OPEN_WEATHER_KEY;
const citiesId = cities.map(city => city.id);
const citiesIdsString = citiesId.join(",");

const getData = async () => {
    const response = await fetch(`${forecastCitiesURL}?id=${citiesIdsString}&units=metric&APPID=${openWeatherKey}`);
    // const response = await fetch('http://api.openweathermap.org/data/2.5/group?id=5138935,625144,524901,1850147,5128638,6356055,292223,6167865,3646738,2618425,281184,1816670,456172,4229546,658226,616051,3435910,2643743,745044,683506&units=metric&APPID=df94fd2decd3bf799ef8c81ee4cb357f');
    // const response = await fetch('https://api.darksky.net/forecast/38c286921dca0454c6cc71ad35a06ef0/37.8267,-122.4233');
    
    console.log(response);
    const forecastData = await response.json();
    console.log(forecastData);
}

const FormattedDate = (props) => (
    // getData(),
    <div>{ `${props.date.getDate()}.${props.date.getMonth()}.${props.date.getFullYear()}` }</div>
);
 
export default FormattedDate;