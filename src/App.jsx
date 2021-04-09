import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import SearchList from './components/SearchList/SearchListConnect';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Redirect path="/" exact to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/:location">
          <SearchList />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
