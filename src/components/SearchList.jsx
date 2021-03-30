import { useMemo, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

import Link from './Link';
import data from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

const SearchList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { location } = useParams();
  const history = useHistory();

  useEffect(() => {
    const cancelTokenSource = data.CancelToken.source();
    try {
      // get all cities that match the search
      data
        .get(`${BASE_URL}/location/search/${location}`, {
          cancelToken: cancelTokenSource.token
        })
        .then(({ data: { locations } }) => {
          setSearchResults(locations);
        });
    } catch (error) {
      alert(ERRORS.DEFAULT.message);
    }

    return () => cancelTokenSource.cancel();
  }, [location]);

  const handleSelectCity = e => {
    // find the exact city chosen from the search results list
    const selectedCityId = e.target.getAttribute('data-target');
    const selectedCityName = e.target.innerText;

    // update the url with the searched city name & its id
    history.push(`/home?city=${selectedCityName}&id=${selectedCityId}`);
  };

  const matchedResults = useMemo(
    () =>
      // sort by country and then by city
      [...searchResults].sort(
        (a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name)
      ),
    [searchResults]
  );
  return (
    <div className="app__main">
      <h2>Here's what we found:</h2>
      {matchedResults.length > 0 ? (
        matchedResults.map(result => (
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
