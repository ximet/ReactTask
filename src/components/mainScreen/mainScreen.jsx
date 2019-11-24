/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.jsx';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import WeatherPreviewList from '../WeatherPreviewList/WeatherPreviewList.jsx';
import WeatherInfoContainer from '../WeatherInfoContainer/WeatherInfoContainer.jsx';
import { toggleButton } from '../../actions/actionCreator';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: {
        source: 'smth',
        alt: 'smth',
      },
      homeIcon: {
        source: 'smth',
        alt: 'smth',
      },
      homeUrl: 'Smth',
    };
  }

      handleClick = () => {
        const { isMore } = this.props;
        toggleButton(isMore);
      };

      render() {
        const {
          logo,
          homeIcon,
          isMore,
          homeUrl,
        } = this.state;
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

export default connect((state) => ({
  isMore: state.isMore,
}), { toggleButton })(MainScreen);
