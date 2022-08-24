// @ts-ignore
import Routes from 'components/Routes.tsx';
// @ts-ignore
import React from 'react';
// @ts-ignore
import { BrowserRouter } from '../node_modules/react-router-dom/index';
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
