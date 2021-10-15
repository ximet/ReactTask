import { CHANGE_LOCATION, CHANGE_SEARCH_STRING } from '../actions/locationsManagerActions';
import StorageConnection from '../services/StorageConnectionService';

const currentLocationFromStore = StorageConnection.getValue('cur_loc');
const favoriteCitiesFromStore = StorageConnection.getValue('fav_cities');

const initialState = {
  currentLocation: currentLocationFromStore ? currentLocationFromStore : {},
  searchString: '',
  favoriteCitiesList: favoriteCitiesFromStore ? favoriteCitiesFromStore : [],
  forecasts: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCATION: {
      return { ...state, currentLocation: action.currentLocation };
    }

    case CHANGE_SEARCH_STRING: {
      return { ...state, searchString };
    }

    default: {
      return state;
    }
  }
}
