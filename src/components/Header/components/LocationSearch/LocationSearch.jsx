// @flow
import classes from './LocationSearch.module.scss';
import * as React from 'react';
import SearchDropDown from './components/SearchDropDown/SearchDropDown';
import { connect } from 'react-redux';
import { changeLocation } from '../../../../actions/locationsManagerActions';
import type { LocationSearchPropsType, LocationSearchStatesType } from './LocationSearchPropsType';

class LocationSearch extends React.Component<LocationSearchPropsType, LocationSearchStatesType> {
  dropdownContainer;

  constructor(props) {
    super(props);

    this.state = {
      isOpenDropDown: false
    };
    this.dropdownContainer = React.createRef<HTMLElement>();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutsideDropdown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutsideDropdown, true);
  }

  handleClickOutsideDropdown = (event: MouseEvent): void => {
    const $target: any = event.target;
    if (this.dropdownContainer.current && !this.dropdownContainer.current.contains($target)) {
      this.setState({
        isOpenDropDown: false
      });
    }
  };

  handleToggleDropDown = (event: MouseEvent): void => {
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
            {this.props.currentLocation.name}
          </a>
          {this.state.isOpenDropDown && (
            <SearchDropDown isOpenDropDown={this.state.isOpenDropDown} />
          )}
        </span>
      </div>
    );
  }
}

const mapStateToProps = ({ locationManager: { currentLocation } }) => {
  return {
    currentLocation
  };
};

const WrappedLocationSearch = (connect(mapStateToProps)(
  LocationSearch
): React.AbstractComponent<LocationSearchPropsType>);

export default WrappedLocationSearch;
