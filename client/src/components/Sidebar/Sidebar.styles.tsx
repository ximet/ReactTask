import styled, { css } from 'styled-components';

import { StylesProps } from 'types';

import theme from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { Search } from 'components/Search/Search.styles';

interface SidebarStyles extends StylesProps {
  open: boolean;
}

export const Sidebar = styled.nav<SidebarStyles>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? 0 : '-100%')};
  width: 20rem;
  height: 100%;
  padding: 1.5rem 2.5rem;
  background: ${theme.palette.primary.light};
  box-shadow: ${theme.shadows[0]};
  transition: all 0.4s ease;
  z-index: 1000;

  a,
  a:link,
  a:visited,
  a:active,
  a:hover {
    color: ${theme.palette.black};
  }

  @media ${breakpoints.lg} {
    padding: 1.5rem 2rem;
  }

  @media ${breakpoints.md} and (orientation: landscape) {
    padding: 1.5rem;
  }

  @media ${breakpoints.sm} {
    width: 100%;
  }

  @media ${breakpoints.xs} {
    padding: 1.5rem;
  }
`;

export const SidebarHeader = styled.div<StylesProps>`
  width: 100%;
  color: ${theme.palette.black};

  ${Search} {
    display: none;
    margin-top: 2rem;
  }

  @media ${breakpoints.sm} {
    ${Search} {
      display: block;
      width: 100%;

      svg {
        top: 25%;
        transform: translate(0%, -0%);
      }
    }
  }
`;

export const SidebarMenuButton = styled.button`
  svg {
    width: 2rem;
    margin-right: 1rem;
    fill: ${theme.palette.black};
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const SidebarBody = styled.ul<StylesProps>`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
`;

interface SidebarItemStylesProps extends StylesProps {
  active?: boolean;
}

export const SidebarItem = styled.li<SidebarItemStylesProps>`
  width: 100%;
  margin: 8px 0;
  padding: 14px 12px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s;
  cursor: pointer;

  &:hover {
    background: ${theme.palette.primary.medium};
  }

  ${({ active }) =>
    active &&
    css`
      background: ${theme.palette.primary.medium};
    `};
`;