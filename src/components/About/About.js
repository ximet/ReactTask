import styles from './About.module.css'

import { ABOUT_TEXT, ABOUT_LABEL } from '../constants';

const About = () => {
  return <div className={styles.aboutContainer}>
        <h1>{ABOUT_LABEL}</h1>
        <p>{ABOUT_TEXT}</p>
    </div>;
};

export default About;
