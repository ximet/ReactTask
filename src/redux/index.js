import { createStore } from 'redux/lib/redux';
import { loadState, saveState } from '../DataService/localDataService';

export function saveFavCity(cityName) {
  return {
    type: 'SAVE_FAV_CITY',
    payload: cityName
  };
}

export function deleteFavCity(cityName) {
  return {
    type: 'DELETE_FAV_CITY',
    payload: cityName
  };
}

function cityReducer(favCityList = [], action) {
  switch (action.type) {
    case 'SAVE_FAV_CITY':
      const isFound = favCityList.some(
        (item) => item.locationData.id === action.payload.locationData.id
      );
      if (isFound) {
        return [...favCityList];
      } else {
        return [...favCityList, action.payload];
      }

    case 'DELETE_FAV_CITY':
      const updatedArr = favCityList.filter(
        (item) => item.locationData.id !== action.payload.locationData.id
      );
      return updatedArr;

    default:
      return favCityList;
  }
}

const persistedState = loadState('savedLocations');
const store = createStore(cityReducer, persistedState);

store.subscribe(() => {
  saveState('savedLocations', store.getState());
});

export default store;
