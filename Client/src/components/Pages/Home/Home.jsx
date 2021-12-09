import React from 'react';
import Title from '../../layout/Typography/Title/Title';
import getLocalData from '../../../api/api';
import WeatherReport from './WeatherReport';
import { connect } from 'react-redux';
import { changeAppTitle } from '../../../redux/actions/actions';
import Button from '../../layout/Buttons/Button';

function Home(props) {
  const weatherData = getLocalData();

  return (
    <React.Fragment>
      <Title>Home of {props.title}</Title>
      <Button onClick={() => props.changeAppTitle()} name="Change the title" buttonType="regular" />
      <WeatherReport data={weatherData ? weatherData.data.observations[0] : null} />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAppTitle: () => dispatch(changeAppTitle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
