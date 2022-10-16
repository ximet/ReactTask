import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCityForecast, getCityInfo } from "../../api/weatherApi.js";

function CityPage(props) {
   const [city, setCity] = useState({});
   const [temperature, setTemperature] = useState('');
   const [windSpeed, setWindSpeed] = useState('');
   const [pressure, setPressure] = useState('');
   const [relHumidity, setRelHumidity] = useState('');
   const [visibility, setVisibility] = useState('');
   
   const params = useParams();

   useEffect(() => {
      getCityInfo(params.id)
      .then(res => {
         setCity(res);
      })
      .catch(err => console.log(err));

      getCityForecast(params.id)
      .then(res => {
         setTemperature(res.observations[0].temperature);
         setWindSpeed(res.observations[0].windSpeed);
         setPressure(res.observations[0].pressure);
         setRelHumidity(res.observations[0].relHumidity);
         setVisibility(res.observations[0].visibility);
      })
      .catch(err => console.log(err))
   }, [params.id]);

   return (
      <div>
         <span>{city.name}</span>
         <ul>
            <li>Temperature: {temperature}</li>
            <li>Wind Speed: {windSpeed}</li>
            <li>Pressure: {pressure}</li>
            <li>Relative Humidity: {relHumidity}</li>
            <li>Visibility: {visibility}</li>
         </ul>
      </div>
   );
}

export { CityPage };