import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../layout/Typography/Title/Title';
import CityResult from './CityResult';
import getWeatherForCity from '../../../api/getWeatherForCity';
import saveLastCityToLocalStorage from '../../../services/saveLastCityToLocalStorage ';

function City() {
  let urlParams = useParams();
  const [cityData, setCityData] = useState();

  useEffect(async () => {
    let cityApiCityData = await getWeatherForCity(urlParams.cityId);
    setCityData(cityApiCityData.data.observations);
    saveLastCityToLocalStorage(urlParams.city, urlParams.cityId);
  }, []);

  return (
    <div>
      <Title>City's data: {urlParams.cityId}</Title>
      {cityData && <CityResult cityData={cityData[0]} />}
    </div>
  );
}

export default City;
