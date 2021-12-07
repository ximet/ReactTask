import React from 'react';
import styles from './SearchResult.modules.css';
function SearchResult({ result }) {
  return (
    <div className={styles.searchResult}>
      <p>
        {result.name}, {result.adminArea}
      </p>
    </div>
  );
}

export default SearchResult;
