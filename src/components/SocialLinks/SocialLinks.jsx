import classes from './SocialLinks.module.scss';
import { getSocialsList } from '../../config/contacts';

const socials = getSocialsList();

function SocialLinks() {
  return (
    <ul className={classes.socials}>
      {socials.map(social => (
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
