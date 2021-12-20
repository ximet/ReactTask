import React, { useState, useEffect } from 'react';
import Title from '../../layout/Typography/Title/Title';
import WeatherReport from './WeatherReport';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalWeather } from '../../../redux/actions/actions';

function Home() {
  useEffect(() => {
    dispatch(getLocalWeather());
  }, []);

  const dispatch = useDispatch();
  const localWeather = useSelector(state => state.localWeather);

  return (
    <React.Fragment>
      <Title>Home of the weather</Title>
      <WeatherReport data={localWeather.data.observations ? localWeather.data.observations[0] : null} />
    </React.Fragment>
  );
}

export default Home;
