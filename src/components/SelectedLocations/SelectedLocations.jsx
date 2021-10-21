import './SelectedLocations.css';
import SelectedLocationsList from './SelectedLocationsList/SelectedLocationsList';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SelectedLocationType } from '../../types/types';

class SelectedLocations extends PureComponent {
  render() {
    return (
      <div className="selected-locations">
        <h2 className="selected-locations__title">Selected locations:</h2>
        <SelectedLocationsList
          selectedLocations={this.props.selectedLocations}
          deleteSelectedLocation={this.props.deleteSelectedLocation}
        />
      </div>
    );
  }
}

SelectedLocations.propTypes = {
  selectedLocations: PropTypes.arrayOf(SelectedLocationType),
  deleteSelectedLocation: PropTypes.func.isRequired
};

SelectedLocations.defaultProps = {
  selectedLocations: null
};

export default SelectedLocations;
