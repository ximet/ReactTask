import React, { FunctionComponent } from 'react';

// Styles
import * as S from './styles';

const INPUT = {
  input: ({ type, placeholder }: { type: string; placeholder: string }) => (
    <S.Input type={type} placeholder={placeholder} />
  )
};

interface InputProps {
  inputElement: 'input';
  type: 'text' | 'textarea' | 'search';
  placeholder: string;
}

const Input: FunctionComponent<InputProps> = ({ inputElement, type, placeholder }) => {+
  return INPUT[inputElement]({ type, placeholder });
};

export default Input;
