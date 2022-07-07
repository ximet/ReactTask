import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src="https://f.hubspotusercontent40.net/hubfs/4979099/logo/Foreca_logo_BRC.png"
          className={styles.logo}
        />
      </div>
    </div>
  );
}

export default Footer;
