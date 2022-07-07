import React, { Children, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import DetailedPage from '../pages/DetailedPage';

export default function SearchBar() {
  const [results, setResults] = useState([]);

  const extractData = data => {
    const extr = data.pop();
    setResults(extr);
  };

  const updateInput = async event => {
    await fetch(`http://localhost:3000/search?location=${event.target.value}`, { method: 'POST' })
      .then(response => response.json())
      .then(result => extractData(result))
      .catch(error => console.log('error', error));
  };

  return (
    <div className="search-bar container">
      <input type="search" onChange={updateInput} placeholder={'find place..'} />
      {!results ? 'results' : <ResultsList list={results} />}
    </div>
  );
}

function ResultsList(list) {
  console.log(list);
  let extacted;
  for (const itm in list) {
    extacted = list[itm];
  }

  return (
    <>
      {extacted.length ? (
        <div className="search-results">
          <ul className="search-results__list">
            {extacted.map(item => (
              <li key={item.lat} className="search-results__list-item">
                <Link
                  to={{
                    pathname: `/location/weather-in-${item.name}`,
                    search: `?name=${item.name}&lon-lat=${item.lat},${item.lat}`
                  }}
                >
                  {item.formatted}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
