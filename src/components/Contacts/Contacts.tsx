import React from 'react';
import { ENDPOINTS } from '../../helpers/api';
import { saveInLocalStorage } from '../../helpers/localStorage';
import { emailRegEx, phoneRegEx } from '../../helpers/regex';
import { Theme, ThemeContext } from '../../store/theme-context';
import Card from './../UI/Card/Card';
import Title from './../UI/Title/Title';
import styles from './Contacts.module.scss';
import Input from './Input/Input';
import RadioInput from './RadioInput/RadioInput';

interface ContactsProps {}
interface ContactsState {
  formIsValid: boolean;
  formIsSubmitted: boolean;
  nameTouched: boolean;
  emailTouched: boolean;
  messageTouched: boolean;
  numberTouched: boolean;
  name: string;
  email: string;
  message: string;
  subscribe: boolean;
  number?: string;
}
interface Feedback {
  name: string;
  email: string;
  message: string;
  subscribe: boolean;
  number?: string;
}

class Contacts extends React.Component<ContactsProps, ContactsState> {
  thankYouCard: React.RefObject<HTMLDivElement>;
  nameIsValid: boolean = false;
  emailIsValid: boolean = false;
  messageIsValid: boolean = false;
  numberIsValid: boolean = true;
  constructor(props: ContactsProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      subscribe: true,
      number: undefined,
      nameTouched: false,
      emailTouched: false,
      messageTouched: false,
      numberTouched: false,
      formIsValid: false,
      formIsSubmitted: false
    };
    this.thankYouCard = React.createRef();
  }

  inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value }: { name: string; value: string | boolean | undefined } = event.target;
    if (name === 'subscribe') {
      this.setState(() => ({ [name]: value === 'yes' }));
    } else {
      this.setState(
        () => ({ [name]: value } as any),
        () => {
          this.updateInputValidations();
          this.checkFormValidity();
        }
      );
    }
  };

  inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name }: { name: string } = event.target;
    this.setState(() => ({ [`${name}Touched`]: true } as any));
  };

  checkFormValidity = () => {
    this.setState({
      formIsValid:
        this.nameIsValid && this.emailIsValid && this.messageIsValid && this.numberIsValid
    });
  };

  updateInputValidations = () => {
    this.nameIsValid = this.state.name !== '';
    this.emailIsValid = emailRegEx.test(this.state.email || '');
    this.messageIsValid = this.state.message !== '';
    this.numberIsValid = !this.state.number || phoneRegEx.test(this.state.number);
  };

  formSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const feedback: Feedback = {
      name: this.state.name!,
      email: this.state.email!,
      message: this.state.message!,
      subscribe: this.state.subscribe!,
      number: this.state.number
    };
    saveInLocalStorage('feedback', feedback);
    this.setState(() => ({
      name: '',
      email: '',
      message: '',
      subscribe: true,
      number: '',
      formIsSubmitted: true
    }));
    this.thankYouCard.current!.scrollIntoView();
  };

  render() {
    return (
      <main className={`${styles.main} ${this.context.theme === Theme.DARK && styles[Theme.DARK]}`}>
        <Card>
          <Title title="Your feedback is important for us" />
          <p className={styles.description}>Fill this form and send us a message</p>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <Input
                valueName="name"
                changeHandler={this.inputChangeHandler}
                inputValue={this.state.name}
                required={true}
                valid={this.nameIsValid}
                touched={this.state.nameTouched}
                errorMessage="Name cannot be empty."
                blurHandler={this.inputBlurHandler}
              />
              <Input
                valueName="email"
                changeHandler={this.inputChangeHandler}
                inputValue={this.state.email}
                required={true}
                valid={this.emailIsValid}
                touched={this.state.emailTouched}
                errorMessage="Check your email. It is not valid."
                blurHandler={this.inputBlurHandler}
              />

              <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="message-input">
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  className={styles.textarea}
                  placeholder="Type your message or questions here and we will go back to you soon!"
                  id="message-input"
                  value={this.state.message}
                  onChange={this.inputChangeHandler}
                  onBlur={this.inputBlurHandler}
                  name="message"
                />
                {!this.messageIsValid && this.state.messageTouched && (
                  <p className={styles.errorMessage}>Message field cannot be empty.</p>
                )}
              </div>

              <div className={styles.inputContainer}>
                <p className={styles.label}>
                  Do you want to get the latest news and updates about our service?{' '}
                  <span className={styles.required}>*</span>
                </p>
                <div className={styles.radioContainer}>
                  <RadioInput
                    name="subscribe"
                    value="yes"
                    changeHandler={this.inputChangeHandler}
                    checked={this.state.subscribe}
                  />
                  <RadioInput
                    name="subscribe"
                    value="no"
                    changeHandler={this.inputChangeHandler}
                    checked={!this.state.subscribe}
                  />
                </div>
              </div>
              {this.state.subscribe && (
                <Input
                  valueName="number"
                  placeholder={'Leave your mobile number if you want to be contacted via sms.'}
                  changeHandler={this.inputChangeHandler}
                  inputValue={this.state.number}
                  required={false}
                  valid={this.numberIsValid}
                  touched={this.state.numberTouched}
                  errorMessage="Check your phone number. It is not valid."
                  blurHandler={this.inputBlurHandler}
                />
              )}
              <button
                className={styles.button}
                onClick={this.formSubmitHandler}
                disabled={!this.state.formIsValid}
              >
                Send
              </button>
            </form>
            <div
              id="thankyou"
              style={this.state.formIsSubmitted ? { opacity: '1' } : { opacity: '0' }}
              ref={this.thankYouCard}
            >
              <Card>
                <p className={styles.thankYouMessage}>
                  <b>
                    Thank You! We have received your message. Have a nice day and don't forget that
                    there is no bad weather!
                  </b>
                </p>
                <img
                  className={styles.sunImg}
                  width="70"
                  src={ENDPOINTS.symbol + 'd000.png'}
                  alt="sun image"
                />
              </Card>
            </div>
          </div>
        </Card>
      </main>
    );
  }
}

Contacts.contextType = ThemeContext;

export default Contacts;
