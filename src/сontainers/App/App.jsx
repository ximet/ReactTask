import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import WeatherPreviewRowsContainer from '../WeatherPreviewRowsContainer/WeatherPreviewRowsContainer.jsx';
import WeatherInfoContainer from '../WeatherInfoContainer/WeatherInfoContainer.jsx';


const MainScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 40px 40px 40px 80px;
`;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      homeIcon: {
        source: '',
        alt: 'No image',
      },
      homeUrl: '/',
    };
  }

  render() {
    const {
      homeIcon,
      homeUrl,
    } = this.state;
    return (
      <>
        <Reset />
        <Header />
        <Sidebar homeUrl={homeUrl} homeIcon={homeIcon} />
        <MainScreen>
          <Switch>
            <Route exact path="/" component={WeatherPreviewRowsContainer} />
            <Route path="/:city" component={WeatherInfoContainer} />
          </Switch>
        </MainScreen>
      </>
    );
  }
}

App.propTypes = {
  homeIcon: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default App;
