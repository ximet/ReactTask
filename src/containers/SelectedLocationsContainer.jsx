import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SelectedLocationType } from '../types/types';
import { connect } from 'react-redux';
import Preloader from '../components/Preloader/Preloader';
import { WEATHER_UPDATE_INTERVAL } from '../constants/constants';
import {
  deleteSelectedLocation,
  updateAllSelectedLocationsData
} from '../actions/SelectedLocationsActions';
import SelectedLocations from '../components/SelectedLocations/SelectedLocations';
import { isReadyForDataFetchingSelector } from '../selectors';

class SelectedLocationsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    // update all selected locations first time
    this.props.updateAllSelectedLocationsData();

    // auto refresh
    this.timerId = setInterval(() => {
      this.props.updateAllSelectedLocationsData();
    }, WEATHER_UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    if (!this.props.isReadyForDataFetching) {
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
  isReadyForDataFetching: PropTypes.bool.isRequired,
  selectedLocations: PropTypes.arrayOf(SelectedLocationType),
  updateAllSelectedLocationsData: PropTypes.func.isRequired,
  deleteSelectedLocation: PropTypes.func.isRequired
};

SelectedLocationsContainer.defaultProps = {
  selectedLocations: null
};

const mapStateToProps = state => {
  return {
    isReadyForDataFetching: isReadyForDataFetchingSelector(state),
    selectedLocations: state.selectedLocations
  };
};

export default connect(mapStateToProps, {
  updateAllSelectedLocationsData,
  deleteSelectedLocation
})(SelectedLocationsContainer);
