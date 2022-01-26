import classes from './side.scss';

import { Link } from 'react-router-dom';

const nav = [
  {
    display: 'Weather',
    path: '/'
  },
  {
    display: 'World weather',
    path: '/worldWeather'
  },
  {
    display: 'Contact Us',
    path: '/contactUs'
  }
];

function Side() {
  return (
    <div className={classes.side}>
      <ul className={classes.nav}>
        {nav.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>
                {route.display}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Side;
