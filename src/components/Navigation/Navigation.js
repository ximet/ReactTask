import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {

    let activeStyle = {
        textDecoration: "underline",
      };
    
    
    return (
        <nav className={styles.navigation}>
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
                Home
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>
                About
            </NavLink>
            <NavLink to="/footer"  style={({ isActive }) => isActive ? activeStyle : undefined}>
                Footer
            </NavLink>
        </nav>
    )
}

export default Navigation;