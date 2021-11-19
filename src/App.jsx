import styles from './main.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Wrapper from './components/layout/Wrapper/Wrapper';
import Info from './components/Pages/Info/Info';
import Feedback from './components/Pages/Feedback/Feedback';
import Explore from './components/Pages/Explore/Explore';
import Home from './components/Pages/Home/Home';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleThemeHandler = () => {
    theme === '' ? setTheme('dark') : setTheme('');
  };

  return (
    <Router>
      <div className={`main ${theme}`}>
        <Header />
        <Wrapper>
          <div className={styles.ThemeToggler}>
            <button className={styles.ThemeTogglerButton} onClick={() => toggleThemeHandler()}>
              Toggle theme
            </button>
          </div>
          <Switch>
            <Route path="/information">
              <Info />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
