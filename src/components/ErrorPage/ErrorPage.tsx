import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.scss';

function ErrorPage() {
  return (
    <div className="error">
      <p className="error__text">Page not found.</p>
      <Link className="error__link" to="/">
        &#10229; Go to Main page
      </Link>
    </div>
  );
}

export default ErrorPage;
