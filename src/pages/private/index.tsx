import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'configs';

const PrivateRoutes = () => (
  <Switch>
    {/* <Route component={null} path={routes.home} exact /> */}
    <Redirect to={routes.home} />
  </Switch>
);

export default PrivateRoutes;
