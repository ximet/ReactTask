import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ErrorModal from '../../components/Error/ErrorModal/ErrorModal';
import { POSSIBLE_ERRORS } from '../../components/Error/errorHandlingHelper';
import { getForecastById, getCityDetails } from '../../services/weatherService';

import styles from './City.module.css';

import { CITY, COUNTRY, TEMPERATURE, WIND_SPEED, DEGREES, M_S, imageUrl } from './cityConstants';

const City = () => {
  const [temperature, setTemperature] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [symbol, setSymbol] = useState('');
  const [cityName, setCityName] = useState('');
  const [country, setCounrty] = useState('');
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getForecastById(id)
      .then(data => {
        setTemperature(data.current.temperature);
        setWindSpeed(data.current.windSpeed);
        setSymbol(data.current.symbol);
      })
      .catch(() => setError(POSSIBLE_ERRORS.GET_CITY));

    getCityDetails(id)
      .then(data => {
        setCityName(data.name);
        setCounrty(data.country);
      })
      .catch(() => setError(POSSIBLE_ERRORS.GET_CITY));
  }, [id]);

  let img = {};
  if (symbol) {
    img = `${imageUrl}/${symbol}.png`;
  }

  const errorConfirmHandler = () => {
    setError(null);
    navigate('/');
  };

  return (
    <div className={styles.cityCardContainer}>
      <>
        {error && (
          <ErrorModal title={error.title} message={error.message} onConfirm={errorConfirmHandler} />
        )}
      </>
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
