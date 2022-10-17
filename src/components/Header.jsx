import { Link } from 'react-router-dom';
import styles from '../styles.scss';
function Header() {
  return (
    <nav className={styles.appheader}>
      <Link className={styles.logo} to="/">
        CanYouSwim??
      </Link>
      <div>
        <Link to="/feedback">Feedback</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
export default Header;
