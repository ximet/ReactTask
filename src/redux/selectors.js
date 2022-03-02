import { createSelector } from "reselect";
import { sortLocationsInfo } from '../assets';
import { formatLocationsInfo } from '../dataService/formatter';
import { flagsDomain } from '../pages/citiesListPage/locationsInfo';

const getLocationsInfo = (state) => state.location.locationsInfo;
const getSearchParam = (state) => state.search.searchParam;

export const getFoundedLocations = createSelector(
  [ getLocationsInfo, getSearchParam ],
  (locationsInfo, searchParam) => filterLocationsInfo(searchParam, locationsInfo)
)

function filterLocationsInfo(param, locationsInfo) {
  const searchParam = param.toLowerCase();

  const foundedLocations = foundLocations(searchParam, locationsInfo);
  const formattedLocations = formatLocationsInfo(foundedLocations, flagsDomain);

  sortLocationsInfo(formattedLocations);

  return formattedLocations;
}

function foundLocations(searchParam, locationsInfo) {
  const foundedLocations = locationsInfo.filter(locationInfo => {
    const country = locationInfo.country.toLowerCase();
    const city = locationInfo.city.toLowerCase();
    
    return country.includes(searchParam) || city.includes(searchParam);
  });

  return foundedLocations;
}
