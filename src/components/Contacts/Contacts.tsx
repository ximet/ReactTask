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
interface ContactsState extends InputValues {
  formIsValid: boolean;
  formIsSubmitted: boolean;
  nameTouched: boolean;
  emailTouched: boolean;
  messageTouched: boolean;
}
interface InputValues {
  [prop: string]: string | boolean | undefined;
}
interface Feedback {
  id?: number;
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
  numberIsValid: boolean = false;
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
      formIsValid: false,
      formIsSubmitted: false
    };
    this.thankYouCard = React.createRef();
  }

  inputChangeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value }: { name: string; value: string } = event.target;
    if (name === 'subscribe') {
      this.setState(() => ({ [name]: value === 'yes' }));
    } else {
      this.setState(
        () => ({ [name]: value }),
        () => {
          this.updateInputValidations();
          this.checkFormValidity();
        }
      );
    }
  }

  inputBlurHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name }: { name: string } = event.target;
    this.setState(() => ({ [`${name}Touched`]: true }));
  }

  checkFormValidity() {
    this.setState({
      formIsValid:
        this.nameIsValid && this.emailIsValid && this.messageIsValid && this.numberIsValid
    });
  }

  updateInputValidations() {
    this.nameIsValid = (this.state.name as string) != '';
    this.emailIsValid = emailRegEx.test(this.state.email as string);
    this.messageIsValid = (this.state.message as string) != '';
    this.numberIsValid =
      phoneRegEx.test(this.state.number as string) ||
      (this.state.number as string) === '' ||
      this.state.number === undefined;
  }

  formSubmitHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const feedback: Feedback = {
      id: Math.random(),
      name: this.state.name as string,
      email: this.state.email as string,
      message: this.state.message as string,
      subscribe: this.state.subscribe as boolean,
      number: this.state.number as string | undefined
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
  }

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
                changeHandler={this.inputChangeHandler.bind(this)}
                inputValue={this.state.name as string}
                required={true}
                valid={this.nameIsValid}
                touched={this.state.nameTouched}
                errorMessage="Name cannot be empty."
                blurHandler={this.inputBlurHandler.bind(this)}
              />
              <Input
                valueName="email"
                changeHandler={this.inputChangeHandler.bind(this)}
                inputValue={this.state.email as string}
                required={true}
                valid={this.emailIsValid}
                touched={this.state.emailTouched}
                errorMessage="Check your email. It is not valid."
                blurHandler={this.inputBlurHandler.bind(this)}
              />

              <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="message-input">
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  className={styles.textarea}
                  placeholder="Type your message or questions here and we will go back to you soon!"
                  id="message-input"
                  value={this.state.message as string}
                  onChange={this.inputChangeHandler.bind(this)}
                  onBlur={this.inputBlurHandler.bind(this)}
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
                    changeHandler={this.inputChangeHandler.bind(this)}
                    checked={this.state.subscribe as boolean}
                  />
                  <RadioInput
                    name="subscribe"
                    value="no"
                    changeHandler={this.inputChangeHandler.bind(this)}
                    checked={!this.state.subscribe as boolean}
                  />
                </div>
              </div>
              {this.state.subscribe && (
                <Input
                  valueName="number"
                  placeholder={'Leave your mobile number if you want to be contacted via sms.'}
                  changeHandler={this.inputChangeHandler.bind(this)}
                  inputValue={this.state.number as string | undefined}
                  required={false}
                  valid={this.numberIsValid}
                  errorMessage="Check your phone number. It is not valid."
                  blurHandler={this.inputBlurHandler.bind(this)}
                />
              )}
              <button
                className={styles.button}
                onClick={this.formSubmitHandler.bind(this)}
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
