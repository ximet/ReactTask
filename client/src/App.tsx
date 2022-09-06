import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'components/Routes';
import './styles/globals.scss';
import { LocationProvider } from 'contexts/LocationContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LocationProvider>
        <div className="app">
          <Routes />
        </div>
      </LocationProvider>
    </BrowserRouter>
  );
};
export default App;
