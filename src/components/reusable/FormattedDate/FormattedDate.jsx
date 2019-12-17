import React from 'react';

const getData = async () => {    
    // const response = await fetch('https://api.darksky.net/forecast/38c286921dca0454c6cc71ad35a06ef0/53.893009,27.567444');
    const response = await fetch('http://api.openweathermap.org/data/2.5/group?id=625144,524901,2950158&units=metric&APPID=9bd16a665dc2bddd94bbed96d24ca638');
    
    console.log(response);
    // const forecastData = await response.json();
    // console.log(forecastData);
}

const FormattedDate = (props) => (
    // getData(),
    <div>{ `${props.date.getDate()}.${props.date.getMonth()}.${props.date.getFullYear()}` }</div>
);
 
export default FormattedDate;