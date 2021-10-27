// @flow
import SearchBar from '../SearchBar/SearchBar';
import SearchedLocations from '../SearchedLocations/SearchedLocations';
import classes from './SearchDropDown.module.scss';
import * as React from 'react';
import { connect } from 'react-redux';
import type { SearchDropDownPropsType } from './SearchDropDownPropsType';
import Preloader from '../../../../../Preloader/Preloader';
import { useLocationSearch } from '../../../../../../hooks/searchHooks';
import { changeVisibleSearchPreloader } from '../../../../../../actions/preloaderManagerActions';

function SearchDropDown({
  isOpenDropDown,
  isLoadingSearch,
  changeVisibleSearchPreloader,
  ...props
}: SearchDropDownPropsType): React$Node {
  const [searchString, setSearchString] = React.useState('');
  const locations = useLocationSearch(searchString, changeVisibleSearchPreloader);
  const handleSetSearchString = async string => setSearchString(string);

  return (
    <div className={classes.searchBarContainer}>
      <SearchBar onChangeSearchString={handleSetSearchString} />
      {isLoadingSearch ? <Preloader /> : <SearchedLocations locations={locations} />}
    </div>
  );
}

const mapStateToProps = ({ preloaderManager: { search } }) => {
  return {
    isLoadingSearch: search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeVisibleSearchPreloader: isLoading => dispatch(changeVisibleSearchPreloader(isLoading))
  };
};

const WrappedSearchDropDown = (connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDropDown): React.AbstractComponent<{}>);

export default WrappedSearchDropDown;
