import React from 'react';

const getData = async () => {
    const forecastRequest = new Request('https://api.darksky.net/forecast/38c286921dca0454c6cc71ad35a06ef0/53.893009,27.567444');
    const response = await fetch(forecastRequest);
    console.log(response);
    const forecastData = await response.json();
    console.log(forecastData);
}

const FormattedDate = (props) => (
    // getData(),
    <div>{ `${props.date.getDate()}.${props.date.getMonth()}.${props.date.getFullYear()}` }</div>
);
 
export default FormattedDate;