import React, { useState } from 'react';
import axios from 'axios';
import ResultsList from './ResultsList';

export default function SearchBar() {
  const [results, setResults] = useState([]);

  const extractData = data => {
    const extr = data.pop();
    setResults(extr);
  };

  const updateInput = async event => {
    await axios
      .post(`http://localhost:3000/search?location=${event.target.value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/html; charset=UTF-8' }
      })
      .then(result => extractData(result.data))
      .catch(error => console.log('error', error));
  };

  return (
    <div className="search-bar container">
      <h2>Try searching a speciffic location</h2>
      <input type="search" onChange={updateInput} placeholder={'find place..'} />
      {!results ? 'results' : <ResultsList list={results} />}
    </div>
  );
}
