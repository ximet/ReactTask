/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Button from '../../components/Button/Button.jsx';
import Header from '../../components/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import WeatherPreviewRowsContainer from '../WeatherPreviewRowsContainer/WeatherPreviewRowsContainer.jsx';
import WeatherInfoContainer from '../WeatherInfoContainer/WeatherInfoContainer.jsx';
import { toggleButtonAction } from '../../store/actions/actionCreator';


const MainScreen = styled.div`
  display:flex;
  flex-direction: column;
  align-items: baseline;
  margin: 40px 40px 40px 80px;
`;

class App extends React.PureComponent {
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
            <Reset />
            <Header logo={logo} />
            <Sidebar homeUrl={homeUrl} homeIcon={homeIcon} />
            <MainScreen>
              {isMore ? <WeatherInfoContainer /> : <WeatherPreviewRowsContainer />}
              <Button text={isMore ? 'More' : 'Back'} onClick={this.handleClick} />
            </MainScreen>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
