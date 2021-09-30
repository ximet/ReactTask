import { NavLink } from 'react-router-dom';
import './MenuItem.css';

function MenuItem({ text, link }) {
  return (
    <li className="menu__item">
      <NavLink
      to={link}
      className="menu__link"
      activeClassName="menu__link_active">
        {text}
      </NavLink>
    </li>
  );
}

export default MenuItem;
