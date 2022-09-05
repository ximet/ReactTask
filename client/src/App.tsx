import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'components/Routes';
import './styles/globals.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes />
      </div>
    </BrowserRouter>
  );
};
export default App;
