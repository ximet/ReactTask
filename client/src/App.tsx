import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'components/Routes';
import './styles/globals.scss';
import { LocationProvider } from 'contexts/LocationContext';
import { ThemeProvider } from 'contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LocationProvider>
        <ThemeProvider>
          <div className="app">
            <Routes />
          </div>
        </ThemeProvider>
      </LocationProvider>
    </BrowserRouter>
  );
};
export default App;
