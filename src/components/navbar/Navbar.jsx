import classes from './navbar.scss';

import { NavLink } from 'react-router-dom';
import { routes } from '../../config/RoutesLinks';

function Navbar(props) {
  const { style } = props;

  return (
    <ul className={classes[style]}>
      {routes.map(route => (
        <li key={route.path}>
          <NavLink to={route.path} exact={route.isExact} activeClassName={classes.active}>
            {route.display}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
