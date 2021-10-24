// @flow
import SearchBar from '../SearchBar/SearchBar';
import SearchedLocations from '../SearchedLocations/SearchedLocations';
import classes from './SearchDropDown.module.scss';
import * as React from 'react';
import { connect } from 'react-redux';
import ApiService from '../../../../../../services/ForecastApiService';
import type {
  LocationType,
  SearchedLocationsType,
  LocationsResponseType
} from '../../../../../../types/LocationType';
import type { SearchDropDownPropsType } from './SearchDropDownPropsType';
import { COOKIE_TOKEN_FIELD } from '../../../../../../utils/constants';
import Preloader from '../../../../../Preloader/Preloader';
import { changeSearchState } from '../../../../../../actions/preloaderManagerActions';

function SearchDropDown({
  isOpenDropDown,
  isLoadingSearch,
  changeSearchState,
  ...props
}: SearchDropDownPropsType): React$Node {
  const [searchString, setSearchString] = React.useState('');
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    changeSearchState(false);
    const setLocationsValue = async (): Promise<void> => {
      const { data } = await ApiService.getLocationsSearch(searchString);
      setLocations(data.locations);
      changeSearchState(true);
    };

    setLocationsValue();
  }, [searchString]);

  const handleSetSearchString = async string => setSearchString(string);

  return (
    <div className={classes.searchBarContainer}>
      <SearchBar onChangeSearchString={handleSetSearchString} />
      {isLoadingSearch ? <SearchedLocations locations={locations} /> : <Preloader />}
    </div>
  );
}

const mapStateToProps = ({ preloaderManager: { search } }) => ({
  isLoadingSearch: search
});

const mapDispatchToProps = dispatch => {
  return {
    changeSearchState: state => dispatch(changeSearchState(state))
  };
};

const WrappedSearchDropDown = (connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDropDown): React.AbstractComponent<{}>);

export default WrappedSearchDropDown;
