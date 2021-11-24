import styles from './main.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Wrapper from './components/layout/Wrapper/Wrapper';
import Info from './components/Pages/Info/Info';
import Feedback from './components/Pages/Feedback/Feedback';
import Explore from './components/Pages/Explore/Explore';
import Home from './components/Pages/Home/Home';
import ThemeToggler from './components/layout/ThemeToggler/ThemeToggler';

function App() {
  const [theme, setTheme] = useState('dark');

  const themes = {
    DARK: 'dark',
    LIGHT: 'light',
    MAIN: 'main'
  };

  const toggleThemeHandler = () => {
    theme === themes.LIGHT ? setTheme(themes.DARK) : setTheme(themes.LIGHT);
  };

  return (
    <Router>
      <div className={[themes.MAIN, theme].join(' ')}>
        <Header />
        <Wrapper>
          <ThemeToggler click={() => toggleThemeHandler()} />
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
