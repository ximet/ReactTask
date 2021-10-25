import classes from './SocialLinks.module.scss';
import { contactsConfig } from '../../config/contacts';

function SocialLinks() {
  return (
    <ul className={classes.socials}>
      {contactsConfig.socials.map(social => (
        <li className={classes.social} key={social.code}>
          <a
            href={social.link}
            target={social.target}
            style={{ backgroundImage: `url(${social.icon})` }}
          ></a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
