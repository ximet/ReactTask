import { CHANGE_LOCATION, CHANGE_SEARCH_STRING } from '../actions/locationsManagerActions';
import StorageConnection from '../services/StorageConnectionService';
import { CURRENT_LOCATION_STORAGE_CODE, FAVORITE_CITIES_STORAGE_CODE } from '../utils/constants';
import mockFavoriteCities from '../components/FavoriteCities/mockData';

const currentLocationFromStore = StorageConnection.getValue(CURRENT_LOCATION_STORAGE_CODE);
const favoriteCitiesFromStore = StorageConnection.getValue(FAVORITE_CITIES_STORAGE_CODE);

const initialState = {
  currentLocation: currentLocationFromStore ? currentLocationFromStore : {},
  searchString: '',
  favoriteCitiesList: favoriteCitiesFromStore ? favoriteCitiesFromStore : mockFavoriteCities,
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
