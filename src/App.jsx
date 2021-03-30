import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { refreshAccessToken } from './common/auth';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchList from './components/SearchList';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshAccessToken().then(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <Header />
      {!isLoading ? (
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/home/:location">
            <SearchList />
          </Route>
          <Redirect path="/" exact to="/home" />
        </Switch>
      ) : (
        <p>Getting things ready for you...</p>
      )}
      <Footer />
    </div>
  );
};
export default App;
