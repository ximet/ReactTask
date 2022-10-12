import React from 'react';
import * as styles from '../../styles/ErrorPage.module.css';

function ErrorPage(props) {
  const errorH1 = 'Oops!';
  const errorSpan = '404 - PAGE NOT FOUND';
  const errorP =
    'The page you are looking for might have been removed, had its name changed or is temporarily unavailable.';

  return (
    <div className={styles.pageWrapper}>
      <h1>{errorH1}</h1>
      <span>{errorSpan}</span>
      <p>{errorP}</p>
    </div>
  );
}

export { ErrorPage };
