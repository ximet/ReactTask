import PropTypes from 'prop-types';
import { SelectedLocationType } from '../../../types/types';
import SelectedLocationsListItem from '../SelectedLocationsListItem/SelectedLocationsListItem';

import './SelectedLocationsList.css';

function SelectedLocationsList({ selectedLocations, deleteSelectedLocation }) {
  return (
    <ul className="selected-locations__list">
      {selectedLocations
        ? selectedLocations.map(locationData => {
            return (
              <SelectedLocationsListItem
                key={locationData.id}
                locationData={locationData}
                deleteSelectedLocation={deleteSelectedLocation}
              />
            );
          })
        : ''}
    </ul>
  );
}

SelectedLocationsList.propTypes = {
  selectedLocations: PropTypes.arrayOf(SelectedLocationType),
  deleteSelectedLocation: PropTypes.func.isRequired
};

SelectedLocationsList.defaultProps = {
  selectedLocations: null
};

export default SelectedLocationsList;
