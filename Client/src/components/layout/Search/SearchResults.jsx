import React from 'react';
import SearchResult from './SearchResult';

function SearchResults(props) {
  return props.searchResult.data.locations.map(result => {
    return <SearchResult key={result.id} result={result} />;
  });
}

export default SearchResults;
