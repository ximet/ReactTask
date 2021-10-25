import classes from './ContactsView.module.scss';
import ContentWrapper from '../../layouts/ContentWrapper/ContentWrapper';
import Contacts from '../../components/Contacts/Contacts';

function ContactsView() {
  return (
    <div className={classes.viewContainer}>
      <ContentWrapper>
        <Contacts />
      </ContentWrapper>
    </div>
  );
}

export default ContactsView;
