import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: var(--grey-color);
  width: 100%;
  height: var(--f20);
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;

export const LinkElem = styled(NavLink)`
  &.${props => props.activeClassName} {
    background-color: var(--dark-grey-color);
    color: var(--black-color);
  }
`;

export const Header = styled.header`
  margin: 0 auto;
  padding: 1rem 0;
  width: 80%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  & #logo {
    font-size: var(--f5);
    font-weight: bold;
    @media screen and (max-width: 500px) {
      font-size: var(--f4);
    }
  }
  a {
    color: var(--black-color);
    padding: 0.6rem;
    text-decoration: none;
    line-height: var(--f5);
    border-radius: 0.5rem;
    margin-left: var(--x1);
    &:hover {
      background-color: var(--dark-grey-color);
      color: var(--black-color);
    }
    @media screen and (max-width: 500px) {
      margin: 0;
      width: 100%;
      padding: 0.2rem 0.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    & a {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: var(--f1);
  & span {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    margin-top: 0;
    & span {
      display: block;
      font-weight: bold;
      font-size: var(--f5);
      margin-left: var(--f5);
    }
  }
`;

export const NavLinks = styled.nav`
  @media screen and (max-width: 500px) {
    display: ${props => (props.show ? 'none' : 'block')};
  }
`;
