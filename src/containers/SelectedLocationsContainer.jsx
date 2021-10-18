import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SelectedLocationType } from '../types/types';
import { connect } from 'react-redux';
import Preloader from '../components/Preloader/Preloader';
import { WEATHER_FIRST_UPDATE_INTERVAL, WEATHER_UPDATE_INTERVAL } from '../constants/constants';
import {
  deleteSelectedLocation,
  updateAllSelectedLocationsData
} from '../actions/SelectedLocationsActions';
import SelectedLocations from '../components/SelectedLocations/SelectedLocations';

class SelectedLocationsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    // wait for ability to get data first time
    const internalTimer = setInterval(() => {
      if (this.props.isTokenReceived && !this.props.isDataFetchnig) {
        this.props.updateAllSelectedLocationsData();
        clearInterval(internalTimer);
      }
    }, WEATHER_FIRST_UPDATE_INTERVAL);

    // auto refresh
    this.timerId = setInterval(() => {
      if (this.props.isTokenReceived && !this.props.isDataFetchnig) {
        this.props.updateAllSelectedLocationsData();
      }
    }, WEATHER_UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    if (this.props.isDataFetchnig || !this.props.isTokenReceived) {
      return <Preloader />;
    }

    return (
      <SelectedLocations
        selectedLocations={this.props.selectedLocations}
        deleteSelectedLocation={this.props.deleteSelectedLocation}
      />
    );
  }
}

SelectedLocationsContainer.propTypes = {
  isDataFetchnig: PropTypes.bool.isRequired,
  isTokenReceived: PropTypes.bool.isRequired,
  selectedLocations: PropTypes.arrayOf(SelectedLocationType),
  updateAllSelectedLocationsData: PropTypes.func.isRequired,
  deleteSelectedLocation: PropTypes.func.isRequired
};

SelectedLocationsContainer.defaultProps = {
  selectedLocations: null
};

const mapStateToProps = state => {
  return {
    isDataFetchnig: state.serverApi.isFetchingInProgress,
    isTokenReceived: state.serverApi.isTokenReceived,
    selectedLocations: state.selectedLocations
  };
};

export default connect(mapStateToProps, {
  updateAllSelectedLocationsData,
  deleteSelectedLocation
})(SelectedLocationsContainer);
