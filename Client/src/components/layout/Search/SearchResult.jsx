import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchResult.modules.css';
function SearchResult({ result }) {
  return (
    <div className={styles.searchResult}>
      <Link to={`/cityweather/${result.name}/${result.id}`}>
        {result.name}, {result.adminArea}
      </Link>
    </div>
  );
}

export default SearchResult;
