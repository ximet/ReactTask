import React, { FunctionComponent, HTMLInputTypeAttribute, ChangeEvent } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Types
import { InputElement } from 'types';

// Styles
import { Flex } from 'styles/global';
import * as S from './Input.styles';

type ChangeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface InputProps {
  elementType: InputElement;
  id?: string;
  elementConfig: {
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    rows?: number;
    options?: Record<string, string>;
  };
  theme?: string;
  onChange?: (e: ChangeEventType) => void;
  onFocus?: (e: ChangeEventType) => void;
  handleClearValue?: (e: ChangeEventType) => void;
  clearEnabled?: boolean;
}

const INPUT = {
  input: ({ elementConfig, theme, handleClearValue, clearEnabled, ...otherProps }: InputProps) => (
    <S.Input
      themeType={theme}
      onBlur={e => {
        if (clearEnabled && handleClearValue) handleClearValue(e);
      }}
      {...elementConfig}
      {...otherProps}
    />
  ),
  textarea: ({ elementConfig, theme, ...otherProps }: InputProps) => (
    <S.Textarea themeType={theme} {...elementConfig} {...otherProps} />
  ),
  radio: ({ id, elementConfig, ...otherProps }: InputProps) => (
    <S.InputGroup>
      <Flex justifyFlexStart>
        {elementConfig.options &&
          Object.keys(elementConfig.options).map((option, i) => {
            const values = elementConfig.options && Object.values(elementConfig.options);
            return (
              <S.RadioWrapper key={option}>
                <S.Radio id={option} name={id} {...elementConfig} {...otherProps} />
                <label htmlFor={option}>{values && values[i]}</label>
              </S.RadioWrapper>
            );
          })}
      </Flex>
    </S.InputGroup>
  )
};

const Input: FunctionComponent<InputProps> = ({ elementType, elementConfig, ...otherProps }) => {
  const theme = useAppSelector(selectTheme);

  const handleClearValue = (e: ChangeEventType) => {
    e.currentTarget.value = '';
  };

  return INPUT[elementType]({
    elementType,
    elementConfig,
    theme,
    handleClearValue,
    ...otherProps
  });
};

export default Input;
