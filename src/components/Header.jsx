import { Link } from 'react-router-dom';
import styles from '../styles.scss';
function Header() {
  return (
    <nav className={styles.appheader}>
      <Link className={styles.logo} to="/">
        CanYouSwim??
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Header;