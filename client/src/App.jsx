import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Globalstyles';
import { lightTheme, darkTheme } from './components/Themes';
import { useDarkMode } from './Components/useDarkMode';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import CitySearch from './Pages/CitySearch';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ThemeToggler from './Components/ThemeToggler/ThemeToggler';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cities" exact component={CitySearch} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
