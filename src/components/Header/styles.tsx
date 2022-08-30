import styled from 'styled-components';

import theme from '../../styles/theme';

interface HeaderProps {
  theme: 'light' | 'dark';
}

export const Header = styled.header<HeaderProps>`
  padding: 1.5rem 0;
  svg {
    fill: ${(props: HeaderProps) =>
      props.theme === 'light' ? theme.palette.black : theme.palette.white};
  }
`;