// @flow
import SearchBar from '../SearchBar/SearchBar';
import SearchedLocations from '../SearchedLocations/SearchedLocations';
import classes from './SearchDropDown.module.scss';
import * as React from 'react';
import { connect } from 'react-redux';
import type { SearchDropDownPropsType } from './SearchDropDownPropsType';
import Preloader from '../../../../../Preloader/Preloader';
import { changeSearchState } from '../../../../../../actions/preloaderManagerActions';
import { useLocationSearch } from '../../../../../../hooks/searchHooks';

function SearchDropDown({
  isOpenDropDown,
  isLoadingSearch,
  ...props
}: SearchDropDownPropsType): React$Node {
  const [searchString, setSearchString] = React.useState('');
  const locations = useLocationSearch(searchString);

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
