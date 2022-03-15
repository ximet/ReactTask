import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App/App';
import Launcher from './core/Launcher';

ReactDOM.render(
  <Launcher>
    <App />
  </Launcher>,
  document.getElementById('app-root'),
);
