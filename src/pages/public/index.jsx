import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'configs';

const Login = React.lazy(() => import('./login'));

const PrivateRoutes = () => (
  <Switch>
    <Route component={Login} path={routes.login} exact />
    <Redirect to={routes.login} />
  </Switch>
);

export default PrivateRoutes;
