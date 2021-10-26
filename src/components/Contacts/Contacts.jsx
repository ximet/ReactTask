import classes from './Contacts.module.scss';
import { ReactComponent as Arrow } from '../../assets/img/svg/icon-arrow.svg';
import Link from '../Link/Link';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import SocialLinks from '../SocialLinks/SocialLinks';
import { contactsConfig } from '../../config/contacts';

function Contacts() {
  return (
    <div className={classes.contactsContainer}>
      <FeedbackForm />
      <div className={classes.contactsWrapper}>
        <div className={[classes.contactEmail, classes.contact].join(' ')}>
          <h3 className={classes.title}>You can contact us by email</h3>
          <Link href={`mailto: ${contactsConfig.email}`} className={classes.email}>
            {contactsConfig.email}
          </Link>
        </div>
        <div className={[classes.contactSocial, classes.contact].join(' ')}>
          <h3 className={classes.title}>Social networks</h3>
          <SocialLinks />
        </div>
        <div className={[classes.contactFeedback, classes.contact].join(' ')}>
          <div className={classes.arrow}>
            <Arrow />
          </div>
          <h3 className={classes.title}>Send feedback form</h3>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
