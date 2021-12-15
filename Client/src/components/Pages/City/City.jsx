import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Title from '../../layout/Typography/Title/Title';
import CityResult from './CityResult';
import getWeatherForCity from '../../../api/getWeatherForCity';
import saveLastCityToLocalStorage from '../../../services/saveLastCityToLocalStorage ';
import { getCurrentSavedCity } from '../../../redux/actions/actions';

function City(props) {
  let urlParams = useParams();

  useEffect(async () => {
    props.getCurrentSavedCity(urlParams.cityId);
    saveLastCityToLocalStorage(urlParams.city, urlParams.cityId);
  }, []);

  return (
    <div>
      <Title>City's data: {urlParams.cityId}</Title>
      {props.currentSavedCity.data && (
        <CityResult cityData={props.currentSavedCity.data.observations[0]} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentSavedCity: state.getCurrentSavedCity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentSavedCity: city => dispatch(getCurrentSavedCity(city))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
