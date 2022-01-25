import classes from './side.scss';

import { Link } from 'react-router-dom';
import { routes } from '../../config/Routes';

function Side() {
  return (
    <div className={classes.side}>
      <ul className={classes.nav}>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Side;
