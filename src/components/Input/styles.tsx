import styled from 'styled-components';

import theme from '../../styles/theme';

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 2rem 0 4.25rem;
  border: none;
  border-radius: ${theme.shape.borderRadius};
  background: ${theme.palette.componentBackgroundLight};

  &:focus {
    outline: none;
  }
`;
