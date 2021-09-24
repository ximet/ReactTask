import classes from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>Project by Gleb Dronchenko, IsSoft Solutions, 2021</div>
    </footer>
  );
}

export default Footer;
