import React, { FunctionComponent, HTMLInputTypeAttribute } from 'react';

// Custom hooks
import { useAppSelector } from '../../redux/hooks';

// Styles
import * as S from './styles';

type InputType = HTMLInputTypeAttribute;

interface InputProps {
  inputElement: 'input';
  type: InputType;
  placeholder: string;
  theme?: string;
}

const INPUT = {
  input: ({ type, placeholder, theme }: InputProps) => (
    <S.Input type={type} placeholder={placeholder} theme={theme} />
  )
};

const Input: FunctionComponent<InputProps> = ({ inputElement, type, placeholder }) => {
  const { theme } = useAppSelector(state => state.theme);

  return INPUT[inputElement]({ type, placeholder, theme, inputElement });
};

export default Input;
