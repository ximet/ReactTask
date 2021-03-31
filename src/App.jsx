import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchList from './components/SearchList';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/:location">
          <SearchList />
        </Route>
        <Redirect path="/" exact to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
