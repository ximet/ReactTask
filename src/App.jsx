import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About, Contact } from './pages';
import * as S from './App.styles';

const App = () => {
  return (
    <div>
      <Header />
      <S.PageContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
        </Switch>
      </S.PageContainer>
      <Footer />
    </div>
  );
};

export default App;
