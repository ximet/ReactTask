import { APP_NAME, PAGES_INFO } from './app_data/pages_info';
import { useState } from 'react';
import Main from './modules/Main';
import Footer from './modules/Footer';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AppBar from './modules/AppBar';
import { DARK, LIGHT } from './app_data/styles_info/theme';

function App() {
  const [pages] = useState(PAGES_INFO);
  const [appName] = useState(APP_NAME);
  const [theme, setTheme] = useState(false);
  const appliedTheme = createTheme(theme ? LIGHT : DARK);


  return (
    <ThemeProvider theme={appliedTheme}>
      <AppBar pages={pages} appName={appName} onSetTheme={setTheme} theme={theme}/>
      <Main pages={pages} />
      <Footer pages={pages} appName={appName} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;



