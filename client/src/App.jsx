import { APP_NAME, PAGES_INFO } from './app_data/pages_info';
import { useState } from 'react';
import Main from './modules/Main';
import Footer from './modules/Footer';
import { CssBaseline } from '@mui/material';
import AppBar from './modules/AppBar';

function App() {
  const [pages] = useState(PAGES_INFO);
  const [appName] = useState(APP_NAME);

  return (
    <>
      <AppBar pages={pages} appName={appName} />
      <Main pages={pages} />
      <Footer pages={pages} appName={appName} />
      <CssBaseline />
    </>
  );
}

export default App;
