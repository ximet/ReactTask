import React from 'react';

import SideMenu from './SideMenu';
import Header from './Header';
import Button from './common/Button';

import CityListPage from './Pages/CityListPage';
import CurrentGeolocationWeatherPage from './Pages/CurrentGeolocationWeatherPage';

const appContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '7rem 1fr',
  gridTemplateRows: '4rem 1fr',
  gridTemplateAreas: `
  "sideMenu header"
  "sideMenu main"
  `,
  width: '100vw',
  height: '100vh',
};

const pages = { currentWeather: 'currentWeather', cityList: 'cityList' };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: pages.currentWeather,
    };
  }

  render() {
    const { currentPage } = this.state;

    const page =
      currentPage === pages.currentWeather ? (
        <CurrentGeolocationWeatherPage
          nav={
            <Button
              style={{ margin: '1rem' }}
              onClick={() => this.setState({ currentPage: pages.cityList })}
            >
              More...
            </Button>
          }
        />
      ) : (
        <CityListPage
          nav={
            <Button
              style={{ margin: '1rem', float: 'right' }}
              onClick={() => this.setState({ currentPage: pages.currentWeather })}
            >
              Back
            </Button>
          }
        />
      );
    return (
      <div style={appContainerStyle}>
        <SideMenu
          onHomeClick={() => this.setState({ currentPage: pages.currentWeather })}
          onAbroadClick={() => this.setState({ currentPage: pages.cityList })}
        />
        <Header />
        <div style={{ gridArea: 'main' }}>{page}</div>
      </div>
    );
  }
}

export default App;
