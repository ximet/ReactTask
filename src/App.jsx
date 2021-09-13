import React from 'react';
import { routes } from './routes/routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BackgroundVideo from './components/generic/backgroundVideo/BackgroundVideo';
import Header from './components/header/Header';

function App() {
  console.log(routes);
  return (
    <BrowserRouter>
      <BackgroundVideo />
      <Header />
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
