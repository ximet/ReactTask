import { useHistory, useParams } from 'react-router';

import Link from './Link';
import useAPIRequest from './CustomHooks/useAPIRequest';
import { REQUEST_TYPES } from '../common/constants';

const SearchList = () => {
  const { location } = useParams();
  const history = useHistory();
  const locations = useAPIRequest(REQUEST_TYPES.location, location);

  const handleSelectCity = e => {
    const selectedCityId = e.target.dataset.target;
    const selectedCityName = e.target.dataset.name;

    history.push(`/home?city=${selectedCityName}&id=${selectedCityId}`);
  };

  return (
    <div className="app__main">
      <h2>Here's what we found:</h2>
      {locations.length > 0 ? (
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
      )}
    </div>
  );
};

export default SearchList;
