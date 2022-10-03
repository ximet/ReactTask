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
  input: ({ inputConfig, theme, handleClearValue, clearEnabled, ...otherProps }: InputProps) => (
    <S.Input
      themeType={theme}
      onBlur={e => {
        if (clearEnabled && handleClearValue) handleClearValue(e);
      }}
      {...inputConfig}
      {...otherProps}
    />
  ),
  textarea: ({ inputConfig, theme, ...otherProps }: InputProps) => (
    <S.Textarea themeType={theme} {...inputConfig} {...otherProps} />
  ),
  radio: ({ id, inputConfig, theme, ...otherProps }: InputProps) => (
    <S.InputGroup>
      <Flex justifyFlexStart>
        {Object.keys(inputConfig.options!).map(option => (
          <S.RadioWrapper key={option} themeType={theme}>
            <S.Radio id={option} name={id} {...inputConfig} {...otherProps} />
            <label htmlFor={option}>{inputConfig.options![option]}</label>
          </S.RadioWrapper>
        ))}
      </Flex>
    </S.InputGroup>
  ),
  rating: ({ ...props }: InputProps) => <StarRating {...props} />
};

const Input: FunctionComponent<InputProps> = ({ inputType, inputConfig, ...otherProps }) => {
  const theme = useAppSelector(selectTheme);

  const handleClearValue = (e: ChangeEventType) => {
    e.currentTarget.value = '';
  };

  return INPUT[inputType]({
    inputType,
    inputConfig,
    theme,
    handleClearValue,
    ...otherProps
  });
};

export default Input;
