import styled from 'styled-components';

import theme from 'styles/theme';
import { colorChange, radioWrapperRoot } from 'styles/mixins';

import { StylesProps } from 'types';

const inputRoot = (props: StylesProps) => `
  width: 100%;
  height: 3rem;
  padding: 0 2rem;
  border: none;
  border-radius: ${theme.shape.borderRadius};
  ${colorChange(
    props,
    'background',
    theme.palette.componentBackgroundLight,
    theme.palette.componentBackgroundDark,
    'all'
  )}
  ${colorChange(props, 'color', theme.palette.black, theme.palette.white, 'all')}
`;

export const Input = styled.input<StylesProps>`
  ${props => inputRoot(props)}
`;

export const TextareaWrapper = styled.div<StylesProps>`
  border-radius: ${theme.shape.borderRadius};
  overflow: hidden;

  &:focus-within {
    outline: auto;
  }
`;

export const Textarea = styled.textarea<StylesProps>`
  ${props => inputRoot(props)}
  height: unset;
  padding: 1rem 2rem;
  border-radius: unset;
  overflow: hidden;
  resize: none;
  overflow-y: scroll;
  outline: none;
`;

export const InputGroup = styled.div`
  div:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

export const RadioWrapper = styled.div<StylesProps>`
  ${radioWrapperRoot}

  label {
    margin-left: 0.5rem;
  }

  label::before,
  label::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 50%;
  }

  label::before {
    left: -1.5px;
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    border: ${({ themeType }) =>
      `1.75px solid ${
        themeType === 'light' ? theme.palette.grey.light : theme.palette.componentBackgroundDark
      }`};
    z-index: 1;
    transform: translateY(-50%);
    transition: border-color 0.28s ${theme.transitions[1]};
  }

  label::after {
    left: 2.5px;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${theme.palette.primary.dark};
    z-index: 2;
    transform: scale(0, 0) translateY(-50%);
    transition: transform 0.28s ${theme.transitions[1]};
  }

  input:checked + label::before {
    border-color: ${theme.palette.primary.dark};
  }

  input:checked + label::after {
    transform: scale(1, 1) translateY(-50%);
  }
`;

export const Radio = styled.input``;
