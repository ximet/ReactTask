import React from 'react';
import styles from '../../Contacts/Contacts.module.scss';

interface RadioInputProps {
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  checked?: boolean;
}

class RadioInput extends React.Component<RadioInputProps> {
  constructor(props: RadioInputProps) {
    super(props);
  }

  capitalizeValue() {
    return this.props.value.slice(0, 1).toUpperCase() + this.props.value.slice(1);
  }

  render() {
    return (
      <>
        <label className={styles.radioLabel} htmlFor={`${this.props.value}-radio`}>
          {this.capitalizeValue()}
        </label>
        <input
          className={styles.radioInput}
          type="radio"
          name={this.props.name}
          value={this.props.value}
          id={`${this.props.value}-radio`}
          onChange={this.props.changeHandler}
          checked={this.props.checked}
        />
      </>
    );
  }
}

export default RadioInput;
