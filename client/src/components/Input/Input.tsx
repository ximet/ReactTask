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
  radio: ({ id, elementConfig, theme, ...otherProps }: InputProps) => (
    <S.InputGroup>
      <Flex justifyFlexStart>
        {elementConfig.options &&
          Object.keys(elementConfig.options).map((option, i) => {
            const values = elementConfig.options && Object.values(elementConfig.options);
            return (
              <S.RadioWrapper key={option} themeType={theme}>
                <S.Radio id={option} name={id} {...elementConfig} {...otherProps} />
                <label htmlFor={option}>{values && values[i]}</label>
              </S.RadioWrapper>
            );
          })}
      </Flex>
    </S.InputGroup>
  ),
  rating: ({ id, elementConfig, theme, ...otherProps }: InputProps) => (
    <StarRating
      id={id}
      numOfStars={elementConfig.options && Object.values(elementConfig.options).length}
      theme={theme}
      elementConfig={elementConfig}
      {...otherProps}
    />
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
