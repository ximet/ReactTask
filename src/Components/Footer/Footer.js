import styles from './Footer.css';

const Header = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>© 2002–2022 Andrey Shulga, for all questions write to <a href='mailto:anreyshulga@coherentsolutions.com'>anreyshulga@coherentsolutions.com</a></div>
        <a href="https://github.com/andreyshulga1cs/ReactTask" target='_blank'>https://github.com/andreyshulga1cs/ReactTask</a>
      </div>
    </footer>
  );
};

export default Header;
