import styled from 'styled-components';

import theme from '../../styles/theme';

interface InputProps {
  theme: 'light' | 'dark';
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 3rem;
  padding: 0 2rem 0 4.25rem;
  border: none;
  border-radius: ${theme.shape.borderRadius};
  background: ${(props: InputProps) =>
    props.theme === 'light'
      ? theme.palette.componentBackgroundLight
      : theme.palette.componentBackgroundDark};

  &:focus {
    outline: none;
  }
`;
