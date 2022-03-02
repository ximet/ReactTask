import classes from './citiesListPage.scss';
import React from 'react';
import { connect } from 'react-redux';
import { getFoundedLocations } from '../../redux/selectors';
import Countries from '../../components/countries/countries';
import Search from '../../components/search/Search';

class CitiesListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={classes.search}>
          <Search />
        </div>
        {this.props.foundedCountries.length ? <Countries countriesInfo={this.props.foundedCountries} /> : 'No data found'}
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foundedCountries: getFoundedLocations(state),
  };
}

export default connect(mapStateToProps, null)(CitiesListPage); 
