import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import PropTypes from 'prop-types';
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
    const { isMore, toggleButton } = this.props;
    toggleButton(!isMore);
  };

  render() {
    const {
      logo,
      homeIcon,
      homeUrl,
    } = this.state;
    const { isMore } = this.props;
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
});

const mapDispatchToProps = (dispatch) => ({
  toggleButton: (isMore) => dispatch(toggleButtonAction(isMore)),
});

App.propTypes = {
  logo: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  homeIcon: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  isMore: PropTypes.bool.isRequired,
  toggleButton: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
