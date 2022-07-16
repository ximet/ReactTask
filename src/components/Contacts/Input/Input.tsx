import React from 'react';
import styles from '../../Contacts/Contacts.module.scss';

interface InputProps {
  valueName: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  inputValue?: string;
  placeholder?: string;
  type?: string;
  valid: boolean;
  touched?: boolean;
  errorMessage: string;
  blurHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  capitalizeInputName() {
    return this.props.valueName.slice(0, 1).toUpperCase() + this.props.valueName.slice(1);
  }

  render() {
    return (
      <>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={`${this.props.valueName}-input`}>
            {`${this.capitalizeInputName()}`}{' '}
            {this.props.required && <span className={styles.required}>*</span>}
          </label>
          <input
            type={this.props.type}
            className={styles.input}
            placeholder={this.props.placeholder || `Enter your ${this.capitalizeInputName()}`}
            id={`${this.props.valueName}-input`}
            value={this.props.inputValue}
            onChange={this.props.changeHandler.bind(this)}
            onBlur={this.props.blurHandler.bind(this)}
            name={this.props.valueName}
          />
          {!this.props.valid && this.props.touched && (
            <p className={styles.errorMessage}>{this.props.errorMessage}</p>
          )}
        </div>
      </>
    );
  }
}

export default Input;
