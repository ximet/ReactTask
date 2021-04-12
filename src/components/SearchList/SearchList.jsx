import { useHistory, useParams } from 'react-router';
import PropTypes from 'prop-types';

import Link from '../Link';
import useFetch from '../CustomHooks/useFetch';

const SearchList = ({ locations, isLoading, getLocationData }) => {
  const { location } = useParams();
  const history = useHistory();

  useFetch(getLocationData, location);

  const handleSelectCity = ({ place, id }) => {
    history.push(`/home?city=${place}&id=${id}`);
  };

  return (
    <div className="app__main">
      <h2>Here are the matches for your location:</h2>
      {!isLoading ? (
        locations?.length > 0 ? (
          locations.map(result => (
            <Link
              place={`${result.name}, ${result.country}`}
              key={result.id}
              id={result.id}
              onClick={handleSelectCity}
            />
          ))
        ) : (
          <p>Ooops, looks like we couldn't find anything</p>
        )
      ) : (
        <p>Fetching the data for you...</p>
      )}
    </div>
  );
};

SearchList.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string,
      id: PropTypes.number
    })
  ),
  isLoading: PropTypes.bool,
  getLocationData: PropTypes.func,
  setsearchWord: PropTypes.func
};

export default SearchList;
