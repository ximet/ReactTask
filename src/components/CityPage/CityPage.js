import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../../api/weatherApi.js';
import * as styles from '../../styles/CityPage.module.css';

function CityPage(props) {
  const [city, setCity] = useState({});
  const [temperature, setTemperature] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [pressure, setPressure] = useState('');
  const [precipProb, setPrecipProb] = useState('');
  const [cloudiness, setCloudiness] = useState('');
  const [visibility, setVisibility] = useState('');

  const params = useParams();

  useEffect(() => {
    apiGet(`https://pfa.foreca.com/api/v1/location/${params.id}`)
      .then(res => {
        setCity(res);
      })
      .catch(err => console.log(err));

    apiGet(`https://pfa.foreca.com/api/v1/current/${params.id}`)
      .then(res => {
        setTemperature(res.current.temperature);
        setWindSpeed(res.current.windSpeed);
        setPressure(res.current.pressure);
        setPrecipProb(res.current.precipProb);
        setCloudiness(res.current.cloudiness);
        setVisibility(res.current.visibility);
      })
      .catch(err => console.log(err));
  }, [params.id]);

  return (
    <div className={styles.cityInfo}>
      <span className={styles.cityName}>
        {city.name}, {city.country}
      </span>
      <ul className={styles.weatherVariables}>
        <li>Temperature: {temperature} °C</li>
        <li>Wind Speed: {windSpeed} m/s</li>
        <li>Pressure: {pressure} mbar</li>
        <li>Precipitation Probability: {precipProb} %</li>
        <li>Cloudiness: {cloudiness} %</li>
        <li>Visibility: {visibility} m</li>
      </ul>
    </div>
  );
}

export { CityPage };
