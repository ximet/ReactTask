import React from 'react';

function ErrorPage(props) {
  const errorH1 = 'Oops!';
  const errorSpan = '404 - PAGE NOT FOUND';
  const errorP = 'The page you are looking for might have been removed, had its name changed or is temporarily unavailable.';

  return (
    <>
      <h1>{errorH1}</h1>
      <span>{errorSpan}</span>
      <p>{errorP}</p>
    </>
  );
}

export { ErrorPage };
