import classes from './LocationSearch.module.scss';
import React from 'react';
import SearchDropDown from './components/SearchDropDown/SearchDropDown';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: 'Gomel',
      isOpenDropDown: false
    };

    this.dropdownContainer = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutsideDropdown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutsideDropdown, true);
  }

  handleClickOutsideDropdown = event => {
    if (this.dropdownContainer.current && !this.dropdownContainer.current.contains(event.target)) {
      this.setState({
        isOpenDropDown: false
      });
    }
  };

  handleSetChangeLocation = location => {
    this.setState({
      currentLocation: location.name
    });
  };

  handleToggleDropDown = event => {
    event.preventDefault();

    this.setState({
      isOpenDropDown: !this.state.isOpenDropDown
    });
  };

  render() {
    return (
      <div className={classes.currentLocation}>
        <span className={classes.title}>current city:</span>
        <span ref={this.dropdownContainer}>
          <a className={classes.value} onClick={this.handleToggleDropDown} href="#">
            {this.state.currentLocation}
          </a>
          {this.state.isOpenDropDown && (
            <SearchDropDown
              isOpenDropDown={this.state.isOpenDropDown}
              onChangeLocation={this.handleSetChangeLocation}
            />
          )}
        </span>
      </div>
    );
  }
}

export default LocationSearch;
