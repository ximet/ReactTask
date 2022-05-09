import React, { Component } from 'react';
import * as S from './Input.styles';

class Input extends Component {
  render() {
    return (
      <S.InputWrapper showError={this.props.isError}>
        <label htmlFor={this.props.labelName || 'input'}>{this.props.labelTitle}</label>
        <input
          type={this.props.type || 'text'}
          id={this.props.labelName || 'input'}
          value={this.props.value}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.isError && <S.ErrorMessage>{this.props.errorMessage || null}</S.ErrorMessage>}
      </S.InputWrapper>
    );
  }
}

export default Input;
