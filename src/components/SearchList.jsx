import { useHistory, useParams } from 'react-router';

import Link from './Link';
import useFetch from './CustomHooks/useFetch';
import { getLocationData } from '../services/weatherService';

const SearchList = () => {
  const { location } = useParams();
  const history = useHistory();
  const locations = useFetch(getLocationData, location);

  const handleSelectCity = ({ place, id }) => {
    history.push(`/home?city=${place}&id=${id}`);
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
