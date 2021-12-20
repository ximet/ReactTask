import React from 'react';
import SearchResult from './SearchResult';

function SearchResults(props) {
  return props.searchResult.locations ? props.searchResult.locations.map(result => {
    return <SearchResult key={result.id} result={result} />;
  }) : null
}

export default SearchResults;
