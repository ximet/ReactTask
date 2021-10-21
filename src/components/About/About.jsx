import { Link } from 'react-router-dom';
import { CONTACT_US_PAGE_LINK } from '../../constants/constants';
import './About.css';

function About() {
  return (
    <div className="about">
      <h2 className="about__title">About Service</h2>
      <p className="about__text">
        We provide weather forecasts all around the world. Our forecasts created by combining
        meteorological data from the leading weather stations. Please enjoy using our service and be
        aware of weather.
      </p>
      <p className="about__text">Feel free to contact us:</p>
      <p className="about__text">
        <Link className="about__link" to={CONTACT_US_PAGE_LINK}>
          Contact/Leave feedback
        </Link>
      </p>
    </div>
  );
}

export default About;
