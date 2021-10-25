import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { clearSearch, searchLocations } from '../actions/LocationsSearchActions';
import { CurrentLocationInfoType } from '../types/types';
import { isReadyForSearchSelector } from '../selectors';
import LocationsSearch from '../components/LocationsSearch/LocationsSearch';

class LocationsSearchContainer extends PureComponent {
  componentWillUnmount() {
    this.props.clearSearch();
  }

  render() {
    return (
      <LocationsSearch
        isReadyForSearch={this.props.isReadyForSearch}
        searchResults={this.props.searchResults}
        clearSearch={this.props.clearSearch}
        searchLocations={this.props.searchLocations}
      />
    );
  }
}

LocationsSearchContainer.propTypes = {
  isReadyForSearch: PropTypes.bool.isRequired,
  searchResults: PropTypes.arrayOf(CurrentLocationInfoType).isRequired,
  clearSearch: PropTypes.func.isRequired,
  searchLocations: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isReadyForSearch: isReadyForSearchSelector(state),
    searchResults: state.locationsSearch.searchResults
  };
};

export default connect(mapStateToProps, {
  clearSearch,
  searchLocations
})(LocationsSearchContainer);
