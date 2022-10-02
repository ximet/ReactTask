import { Link } from 'react-router-dom';
import styles from '../styles.scss';
function Header() {
  return (
    <div className={styles.appheader}>
      <Link to="/">
        <p>CanYouSwim??</p>
      </Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
export default Header;
