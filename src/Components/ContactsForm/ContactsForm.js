import styles from './ContactsForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { listPageActions } from '../../Store/reducers/ContactsFormSlice/index';

const ContactsForm = props => {
  const dispatch = useDispatch();
  // const { name, nameIsValid, email, emailIsValid, message } = useSelector(state => state.contactsForm);

  const submitForm = e => {
    e.preventDefault();
    console.log(1);
  };
  return (
    <>
      <form className={styles.form} onSubmit={submitForm}>
        <div className={styles.inputWrap}>
          <input className={styles.input} type="text" name="name" placeholder="Name" />
        </div>
        <div className={styles.inputWrap}>
          <input className={styles.input} type="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.inputWrap}>
          <textarea className={styles.input} name="message" placeholder="Message"></textarea>
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
