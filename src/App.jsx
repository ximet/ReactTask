import React, { useContext } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About, Contact, CityWeather } from './pages';
import { DarkModeContext } from './contexts/darkMode';
import { GlobalStyles } from './styles/globalStyles';
import * as S from './App.styles';

const App = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  return (
    <HashRouter>
      <Header />
      <GlobalStyles isDarkMode={isDarkMode} />
      <S.PageContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weather" exact component={CityWeather} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
        </Switch>
      </S.PageContainer>
      <Footer />
    </HashRouter>
  );
};

export default App;
