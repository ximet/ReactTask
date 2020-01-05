/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.jsx';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import WeatherPreviewList from '../WeatherPreviewList/WeatherPreviewList.jsx';
import WeatherInfoContainer from '../WeatherInfoContainer/WeatherInfoContainer.jsx';
import { toggleButtonAction, fetchWeatherByCityAction } from '../../actions/actionCreator';


class MainScreen extends Component {
  componentDidMount() {
    const { fetchWeatherByCity } = this.props;
    fetchWeatherByCity('Minsk');
  }

  handleClick = () => {
    const { isMore, toggleButton } = this.props;
    toggleButton(!isMore);
  };

  render() {
    const {
      logo,
      homeIcon,
      isMore,
      homeUrl,
    } = this.props;
    return (
      <>
        <Header logo={logo} />
        <Sidebar homeUrl={homeUrl} homeIcon={homeIcon} />
        <>
          {isMore ? <WeatherInfoContainer /> : <WeatherPreviewList />}
        </>
        <Button text={isMore ? 'More' : 'Back'} onClick={this.handleClick} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isMore: state.toggleButton.isMore,
  logo: state.toggleButton.logo,
  homeIcon: state.toggleButton.homeIcon,
  homeUrl: state.toggleButton.homeUrl,
});

const mapDispatchToProps = (dispatch) => ({
  toggleButton: (isMore) => dispatch(toggleButtonAction(isMore)),
  fetchWeatherByCity: (city) => dispatch(fetchWeatherByCityAction(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
