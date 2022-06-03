import { Route, Switch } from 'react-router-dom';
import { routes } from '../../config/Routes';

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, isExact, title }) => (
        <Route
          key={path}
          path={path}
          exact={isExact}
          render={() => {
            document.title = title;
            return <Component />;
          }}
        />
      ))}
    </Switch>
  );
};

export default Routes;
