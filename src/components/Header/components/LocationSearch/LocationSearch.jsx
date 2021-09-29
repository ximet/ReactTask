import classes from './LocationSearch.module.scss';
import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchedLocations from './components/SearchedLocations/SearchedLocations';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: 'Gomel',
      searchString: '',
      isLoading: false,
      isOpenSearchBar: false
    };
  }

  handleSetSearchString = string => {
    this.setState({
      searchString: string
    });
  };

  handleToggleSearchBar = event => {
    event.preventDefault();

    this.setState({
      isOpenSearchBar: !this.state.isOpenSearchBar
    });
  };

  render() {
    const searchBar = (
      <div className={classes.searchBarContainer}>
        <SearchBar setSearchString={this.handleSetSearchString} />
        <SearchedLocations searchString={this.state.searchString} />
      </div>
    );

    return (
      <div className={classes.currentLocation}>
        <span className={classes.title}>current city:</span>
        <a className={classes.value} onClick={this.handleToggleSearchBar} href="#">
          {this.state.currentLocation}
        </a>
        {this.state.isOpenSearchBar && searchBar}
      </div>
    );
  }
}

export default LocationSearch;
