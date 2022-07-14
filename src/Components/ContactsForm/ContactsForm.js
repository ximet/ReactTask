import styles from './ContactsForm.css';
import { useDispatch, useSelector } from 'react-redux';

import contactFormRequest from '../../Services/mailers/contactFormRequest';

import { contactsFormActions } from '../../Store/reducers/ContactsFormSlice/index';
import { popupActions } from '../../Store/reducers/PopupSlice/index';

import PopupPortal from '../../Components/Popup/PopupPortal';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const {
    name,
    nameIsValid,
    email,
    emailIsValid,
    message,
    question1,
    question2,
    question3
  } = useSelector(state => state.contactsForm);
  const { popupMessage } = useSelector(state => state.popup);

  const nameChangeHandler = e => dispatch(contactsFormActions.changeName(e.target.value));
  const emailChangeHandler = e => dispatch(contactsFormActions.changeEmail(e.target.value));
  const messageChangeHandler = e => dispatch(contactsFormActions.changeMessage(e.target.value));
  const question1ChangeHandler = e => dispatch(contactsFormActions.changeQuestion1(e.target.value));
  const question2ChangeHandler = () => dispatch(contactsFormActions.changeQuestion2(!question2));
  const question3ChangeHandler = e => dispatch(contactsFormActions.changeQuestion3(e.target.value));

  const submitForm = e => {
    e.preventDefault();

    if (!nameIsValid) {
      dispatch(popupActions.setMessage('Name is invalid!'));
    } else if (!emailIsValid) {
      dispatch(popupActions.setMessage('Email is invalid!'));
    } else {
      contactFormRequest({ name, email, message, question1, question2, question3 })
        .then(() => {
          dispatch(popupActions.setMessage('Thank you for application!'));
        })
        .catch(error => {
          console.log(error);
          dispatch(popupActions.setMessage('Something was wrong!'));
        });
    }
  };

  return (
    <>
      {popupMessage && <PopupPortal message={popupMessage} />}
      <form className={styles.form} onSubmit={submitForm}>
        <div className={styles.inputWrap + (!nameIsValid ? ` ${styles.invalid}` : '')}>
          <input
            className={styles.input}
            value={name}
            onChange={nameChangeHandler}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className={styles.inputWrap + (!emailIsValid ? ` ${styles.invalid}` : '')}>
          <input
            className={styles.input}
            value={email}
            onChange={emailChangeHandler}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className={styles.selectWrap}>
          <select
            className={styles.select}
            name="question1"
            defaultValue="0"
            onChange={question1ChangeHandler}
          >
            <option value="0" disabled>
              Who do you like more, Dogs or Cats?
            </option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
          </select>
        </div>
        <label className={styles.checkboxWrap}>
          <span>Do you support a military operation in Ukraine?</span>
          <input
            defaultChecked={question2}
            onChange={question2ChangeHandler}
            type="checkbox"
            name="question2"
          />
          <span className={styles.checkboxEl}></span>
        </label>

        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            value={question3}
            onChange={question3ChangeHandler}
            type="number"
            name="question3"
            placeholder="How many planets in the Sun System?"
          />
        </div>
        <div className={styles.inputWrap}>
          <textarea
            className={styles.input}
            value={message}
            onChange={messageChangeHandler}
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
