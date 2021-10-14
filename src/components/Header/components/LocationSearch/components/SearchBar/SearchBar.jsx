import React from 'react';
import classes from './SearchBar.module.scss';
import { delayDecorator } from '../../../../../../utils/decorators';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchSting: ''
    };

    this.setChangingSearch = delayDecorator(this.props.onChangeSearchString, 1000);
  }

  onChangeSearchString = event => {
    const searchString = event.target.value;
    this.setState({ searchSting: searchString });
    this.setChangingSearch(searchString);
  };

  render() {
    return (
      <form className={classes.searchBarForm} action="#">
        <input
          className={classes.searchField}
          onChange={this.onChangeSearchString}
          type="text"
          value={this.state.searchSting}
          placeholder="Enter location"
        />
      </form>
    );
  }
}

export default SearchBar;
