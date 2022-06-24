import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navMenu}>
            <div className={styles.container}>
                <ul className={styles['nav-items']}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/cities">Cities</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
