/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.jsx';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import WeatherPreviewList from '../WeatherPreviewList/WeatherPreviewList.jsx';
import WeatherInfoContainer from '../WeatherInfoContainer/WeatherInfoContainer.jsx';
import { toggleButtonAction } from '../../actions/actionCreator';


class MainScreen extends Component {
      handleClick = () => {
        const { isMore } = this.props;
        toggleButtonAction(!isMore);
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
  toggleButtonAction: (isMore) => dispatch(toggleButtonAction(isMore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
