import React from 'react';
import classes from './SearchBar.module.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchSting: ''
    };
  }

  handleSearch = event => {
    const searchString = event.target.value;

    this.setState({
      searchSting: searchString
    });

    this.props.setSearchString(searchString);
  };

  render() {
    return (
      <form className={classes.searchBarForm} action="#">
        <input
          className={classes.searchField}
          onChange={this.handleSearch}
          type="text"
          value={this.state.searchSting}
          placeholder="Enter location"
        />
      </form>
    );
  }
}

export default SearchBar;
