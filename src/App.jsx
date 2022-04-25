import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About, Contact } from './pages';
// import * as Style from './App.styles';
import 'App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
