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
    document.addEventListener('mousedown', this.handleClickOutsideDropdown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutsideDropdown);
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
      <div className={classes.currentLocation} ref={this.dropdownContainer}>
        <span className={classes.title}>current city:</span>
        <a className={classes.value} onClick={this.handleToggleDropDown} href="#">
          {this.state.currentLocation}
        </a>
        {this.state.isOpenDropDown && (
          <SearchDropDown
            isOpenDropDown={this.state.isOpenDropDown}
            onChangeLocation={this.handleSetChangeLocation}
          />
        )}
      </div>
    );
  }
}

export default LocationSearch;
