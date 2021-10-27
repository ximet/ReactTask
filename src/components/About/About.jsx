import classes from './About.module.scss';
import { Link as RouterLink } from 'react-router-dom';
import Link from '../Link/Link';

function About() {
  return (
    <div className={classes.aboutContainer}>
      <h1>About us</h1>
      <p className={classes.textParagraph}>
        This project was created to enable to people to monitor the weathet around the world. Also
        it was training project. If you have any suggestions for the service work, you can contact
        us using link bellow.
      </p>
      <RouterLink className={classes.link} to="/contacts">
        Contacts
      </RouterLink>
      <p className={classes.textParagraph}>
        This application works together with external forecast API service named "Foreca wether
        API". You can read more information on
        <Link
          className={classes.link}
          target="__blank"
          href="https://corporate.foreca.com/en/foreca-weather-api"
        >
          site of this company
        </Link>
        .
      </p>
    </div>
  );
}

export default About;
