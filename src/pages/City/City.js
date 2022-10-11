import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getForecastById, getCityDetails } from '../../services/weatherService';

import styles from './City.module.css';

import { CITY, COUNTRY, TEMPERATURE, WIND_SPEED, DEGREES, M_S, imageUrl } from './cityConstants';

const City = () => {
  const [temperature, setTemperature] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [symbol, setSymbol] = useState('');
  const [cityName, setCityName] = useState('');
  const [country, setCounrty] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getForecastById(id)
      .then(data => {
        setTemperature(data.current.temperature);
        setWindSpeed(data.current.windSpeed);
        setSymbol(data.current.symbol);
      })
      .catch(err => console.log(err.message));

    getCityDetails(id)
      .then(data => {
        setCityName(data.name);
        setCounrty(data.country);
      })

      .catch(err => console.log(err.message));
  }, [id]);

  let img = {};
  if (symbol) {
    img = `${imageUrl}/${symbol}.png`;
  }

  return (
    <div className={styles.cityCardContainer}>
      <div className={styles.cityCardInfo}>
        <div>
          <span>{CITY}</span> {cityName}
        </div>
        <div>
          <span>{COUNTRY}</span> {country}
        </div>
        <div>
          <span>{TEMPERATURE}</span> {temperature} {DEGREES}
        </div>
        <div>
          <span>{WIND_SPEED}</span> {windSpeed} {M_S}
        </div>
      </div>
      <img src={img} />
    </div>
  );
};

export default City;
