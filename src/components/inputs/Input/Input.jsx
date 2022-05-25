import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';

class Input extends Component {
  render() {
    return (
      <S.InputWrapper showError={this.props.isError}>
        <label htmlFor={this.props.labelName}>{this.props.labelTitle}</label>
        <input
          type={this.props.type}
          id={this.props.labelName}
          value={this.props.value}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.isError && <S.ErrorMessage>{this.props.errorMessage}</S.ErrorMessage>}
      </S.InputWrapper>
    );
  }
}

Input.defaultProps = {
  labelName: 'input',
  type: 'text',
  errorMessage: null
};

Input.propTypes = {
  labelName: PropTypes.string,
  labelTitle: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired
};

export default Input;
