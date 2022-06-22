import { Link } from 'react-router-dom';
import styles from './Header.css';
import stylesGeneral from '../../assets/css/general.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={stylesGeneral.container}>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
