import { app_name, pages_info } from './app_data/pages_info';
import { useState } from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import AppBar from './components/AppBar';

function App() {
  const [pages] = useState(pages_info);
  const [appName] = useState(app_name);
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
