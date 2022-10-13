import React, { FunctionComponent } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Types
import type { InputProps, ChangeEventType } from 'types';

// Components
import StarRating from 'components/StarRating/StarRating';

// Styles
import { Flex } from 'styles/global';
import * as S from './Input.styles';

const INPUT = {
  input: ({
    inputConfig,
    value,
    theme,
    handleClearValue,
    clearEnabled,
    ...otherProps
  }: InputProps) => (
    <S.Input
      themeType={theme}
      value={value}
      onBlur={e => {
        if (clearEnabled && handleClearValue) handleClearValue(e);
      }}
      {...inputConfig}
      {...otherProps}
    />
  ),
  textarea: ({ inputConfig, value, theme, ...otherProps }: InputProps) => (
    <S.TextareaWrapper>
      <S.Textarea value={value} themeType={theme} {...inputConfig} {...otherProps} />
    </S.TextareaWrapper>
  ),
  radio: ({ id, value, inputConfig, theme, ...otherProps }: InputProps) => (
    <S.InputGroup role="radiogroup">
      <Flex justifyFlexStart>
        {Object.keys(inputConfig!.options!).map(option => (
          <S.RadioWrapper key={option} themeType={theme}>
            <S.Radio
              id={option}
              name={id}
              value={inputConfig!.options![option]}
              checked={value === inputConfig!.options![option]}
              {...inputConfig}
              {...otherProps}
            />
            <label htmlFor={option}>{inputConfig!.options![option]}</label>
          </S.RadioWrapper>
        ))}
      </Flex>
    </S.InputGroup>
  ),
  rating: ({ ...props }: InputProps) => <StarRating {...props} />
};

const Input: FunctionComponent<InputProps> = ({ inputType, value, inputConfig, ...otherProps }) => {
  const theme = useAppSelector(selectTheme);

  const handleClearValue = (e: ChangeEventType) => {
    e.currentTarget.value = '';
  };

  return INPUT[inputType!]({
    inputType,
    value,
    inputConfig,
    theme,
    handleClearValue,
    ...otherProps
  });
};

export default Input;
