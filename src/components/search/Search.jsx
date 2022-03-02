import React from 'react';
import { connect } from 'react-redux';
import { searchLocation } from '../../redux/actions';
import classes from './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.props.searchLocation(this.state.value);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    
  }

  render() {
    return <input className={classes.searchInput} placeholder='Search...' onChange={this.handleChange}></input>;
  }
}

const mapDispatchToProps = {
  searchLocation
};

export default connect(null, mapDispatchToProps)(Search);
