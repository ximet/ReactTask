import React, { Component } from 'react';
import Button from '../button/button.jsx';
import Header from '../header/header.jsx';
import Sidebar from '../sidebar/sidebar.jsx';
import WeatherPreviewList from '../weatherPreviewList/weatherPreviewList.jsx';
import WeatherInfoContainer from '../weatherInfoContainer/weatherInfoContainer.jsx';

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
    
      onHandleClick = () => {
        const { isMore } = this.state;
        this.setState({ isMore: !isMore });
      }
    
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
            <Button text={isMore ? 'More' : 'Back'} handleClick={this.onHandleClick} />
          </>
        );
      }
}

export default MainScreen;
