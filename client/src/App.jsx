import { APP_NAME, PAGES_INFO } from './app_data/pages_info';
import { useState } from 'react';
import Main from './modules/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from './modules/Footer';
import { CssBaseline } from '@mui/material';
import AppBar from './modules/AppBar';

function App() {
  const [pages] = useState(PAGES_INFO);
  const [appName] = useState(APP_NAME);
  return (
    <BrowserRouter>
      <AppBar pages={pages} appName={appName} />
      <Main pages={pages} />
      <Footer pages={pages} appName={appName} />
      <CssBaseline />
    </BrowserRouter>
  );
}

export default App;
