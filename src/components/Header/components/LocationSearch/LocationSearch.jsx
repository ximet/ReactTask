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

  dropdownContainer = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutsideDropdown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutsideDropdown);
  }

  handleClickOutsideDropdown = event => {
    if (this.dropdownContainer.current && !this.dropdownContainer.current.contains(event.target)) {
      this.setState({
        isOpenSearchBar: false
      });
    }
  };

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
      <div className={classes.searchBarContainer} ref={this.dropdownContainer}>
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
