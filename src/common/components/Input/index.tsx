import React, { FunctionComponent } from 'react';

// Custom hooks
import { useAppSelector } from '../../../app/hooks';

// Styles
import * as S from './styles';

const INPUT = {
  input: ({ type, placeholder, theme }: { type: string; placeholder: string; theme: string }) => (
    <S.Input type={type} placeholder={placeholder} theme={theme} />
  )
};

interface InputProps {
  inputElement: 'input';
  type: 'text' | 'textarea' | 'search';
  placeholder: string;
}

const Input: FunctionComponent<InputProps> = ({ inputElement, type, placeholder }) => {
  const { theme } = useAppSelector(state => state.theme);

  return INPUT[inputElement]({ type, placeholder, theme });
};

export default Input;
