import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container, GlobalStyles } from './themes/Themes';
import DarkThemeProvider from './themes/DarkThemeProvider';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import CitySearch from './Pages/CitySearch';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <DarkThemeProvider theme={{ theme: 'dark' }}>
      <Container>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/cities" exact component={CitySearch} />
          </Switch>
          <Footer />
        </Router>
      </Container>
    </DarkThemeProvider>
  );
}

export default App;
