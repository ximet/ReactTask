import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Title from '../../layout/Typography/Title/Title';
import CityResult from './CityResult';
import saveLastCityToLocalStorage from '../../../services/saveLastCityToLocalStorage ';
import { getCurrentSavedCity } from '../../../redux/actions/actions';

function City() {
  let urlParams = useParams();

  const dispatch = useDispatch();
  const currentSavedCity = useSelector(state => state.getCurrentSavedCity);

  useEffect(async () => {
    dispatch(getCurrentSavedCity(urlParams.cityId));
    saveLastCityToLocalStorage(urlParams.city, urlParams.cityId);
  }, []);

  return (
    <div>
      <Title>City's data: {urlParams.cityId}</Title>
      {currentSavedCity.data.observations && (
        <CityResult cityData={currentSavedCity.data.observations[0]} />
      )}
    </div>
  );
}

export default City;
