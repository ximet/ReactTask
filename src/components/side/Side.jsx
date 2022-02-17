import classes from './side.scss';

import { NavLink } from 'react-router-dom';
import { routes } from '../../config/RoutesLinks';

function Side() {
  return (
    <div className={classes.side}>
      <ul className={classes.nav}>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path} exact={route.isExact} activeClassName={classes.active}>{route.display}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Side;
