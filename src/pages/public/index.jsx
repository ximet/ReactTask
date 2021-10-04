import { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'configs';

const Login = lazy(() => import('./login'));

const PrivateRoutes = () => (
  <Switch>
    <Route component={Login} path={routes.login} exact />
    <Redirect to={routes.login} />
  </Switch>
);

export default PrivateRoutes;
