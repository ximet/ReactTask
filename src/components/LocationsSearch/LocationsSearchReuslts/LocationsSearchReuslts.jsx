import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LOCATIONS_PAGE_LINK } from '../../../constants/constants';
import { CurrentLocationInfoType } from '../../../types/types';
import './LocationsSearchReuslts.css';

function LocationsSearchReuslts({ searchResults }) {
  return (
    <>
      <h3 className="locations-search__results-title">Results:</h3>
      {searchResults.length > 0 ? (
        <ul className="locations-search__results-list">
          {searchResults.map(({ id, name, country }) => {
            return (
              <li key={id} className="locations-search__results-item">
                <Link
                  to={`${LOCATIONS_PAGE_LINK}/${id}`}
                  className="locations-search__results-link"
                >
                  {`${name}, ${country}`}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="locations-search__no-results">No results for this query</div>
      )}
    </>
  );
}

LocationsSearchReuslts.propTypes = {
  searchResults: PropTypes.arrayOf(CurrentLocationInfoType).isRequired
};

export default LocationsSearchReuslts;
