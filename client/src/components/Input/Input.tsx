import React, {
  FunctionComponent,
  HTMLInputTypeAttribute,
  ChangeEvent,
  RefObject,
  useRef
} from 'react';

// Store
import { useAppSelector } from 'redux/hooks';

// Styles
import * as S from './Input.styles';

type ChangeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface InputProps {
  inputRef?: RefObject<HTMLInputElement>;
  inputElement: 'input';
  type: HTMLInputTypeAttribute;
  placeholder: string;
  theme?: string;
  onChange?: (e: ChangeEventType) => void;
  onFocus?: (e: ChangeEventType) => void;
  handleClearValue?: (e: ChangeEventType) => void;
}

const INPUT = {
  input: ({
    inputRef,
    type,
    placeholder,
    theme,
    onChange,
    onFocus,
    handleClearValue
  }: InputProps) => (
    <S.Input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      themeType={theme}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={e => {
        if (handleClearValue) handleClearValue(e);
      }}
    />
  )
};

const Input: FunctionComponent<InputProps> = ({
  inputElement,
  type,
  placeholder,
  onChange,
  onFocus
}) => {
  const theme = useAppSelector(state => state.global.theme);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearValue = (e: ChangeEventType) => {
    e.currentTarget.value = '';
  };

  return INPUT[inputElement]({
    inputRef,
    type,
    placeholder,
    inputElement,
    theme,
    onChange,
    onFocus,
    handleClearValue
  });
};

export default Input;
