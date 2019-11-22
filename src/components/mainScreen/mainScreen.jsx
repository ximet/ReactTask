import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import WeatherPreviewList from '../WeatherPreviewList/WeatherPreviewList.jsx';
import WeatherInfoContainer from '../WeatherInfoContainer/WeatherInfoContainer.jsx';

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
      isMore: false,
      homeUrl: 'Smth',
    };
  }

      handleClick = () => {
        const { isMore } = this.state;
        this.setState({ isMore: !isMore });
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

export default MainScreen;
