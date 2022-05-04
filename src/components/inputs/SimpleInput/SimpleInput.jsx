import React, { Component } from 'react';
import * as S from './SimpleInput.styles';

class Input extends Component {
  render() {
    return (
      <S.InputWrapper showError={this.props.isError}>
        <label htmlFor={this.props.labelName}>{this.props.labelTitle}</label>
        <input
          type={this.props.type || 'text'}
          id={this.props.labelName}
          value={this.props.inputValue}
          onChange={this.props.changeHandler}
          onBlur={this.props.blurHandler}
        />
        {this.props.isError && <S.ErrorMessage>{this.props.errorMessage || null}</S.ErrorMessage>}
      </S.InputWrapper>
    );
  }
}

export default Input;
