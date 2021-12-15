import React, { useState, useEffect } from 'react';
import Title from '../../layout/Typography/Title/Title';
import WeatherReport from './WeatherReport';
import { connect } from 'react-redux';
import { changeAppTitle } from '../../../redux/actions/actions';
import { getLocalWeather } from '../../../redux/actions/actions';
import { authentication } from '../../../redux/actions/actions';

function Home(props) {
  useEffect(async () => {
    props.getLocalWeather();
  }, []);

  return (
    <React.Fragment>
      <Title>Home of {props.title}</Title>
      <WeatherReport
        data={props.localWeather.data ? props.localWeather.data.observations[0] : null}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title.title,
    authentication: state.authentication,
    localWeather: state.localWeather
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAppTitle: () => dispatch(changeAppTitle()),
    getLocalWeather: () => dispatch(getLocalWeather()),
    authentication: () => dispatch(authentication())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
