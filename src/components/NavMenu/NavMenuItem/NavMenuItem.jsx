import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavMenuItem.css';

function NavMenuItem({ text, link }) {
  return (
    <li className="menu__item">
      <NavLink to={link} className="menu__link" activeClassName="menu__link_active">
        {text}
      </NavLink>
    </li>
  );
}

NavMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default NavMenuItem;
