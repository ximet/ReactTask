import styled, { css } from 'styled-components';
import { NavLink } from 'components';

export const Header = styled('header')`
  width: 100%;
  padding: ${(props) => props.theme.spacing(4)} 0;
  background-color: ${(props) => props.theme.palette.primary.dark};
  box-shadow: ${(props) => props.theme.shape.boxShadow};
  margin: 0;
`;

export const Link = styled(NavLink)`
  box-sizing: border-box;
  display: inline-block;
  line-height: 2rem;
  padding: 0 2rem;
  color: ${(props) => props.theme.palette.gray[100]};
  font-weight: 600;

  &.active {
    border-bottom: ${(props) => props.theme.spacing()} solid
      ${(props) => props.theme.palette.gray[100]};
  }
`;
