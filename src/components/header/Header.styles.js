import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: var(--grey-color);
  width: 100%;
  height: var(--f20);
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;

export const Header = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  width: calc(80% + 1rem);
  & #logo {
    font-size: var(--f5);
    font-weight: bold;
    @media screen and (max-width: 500px) {
      font-size: var(--f4);
    }
  }
  a {
    float: left;
    color: var(--black-color);
    text-align: center;
    padding: 0.6rem;
    text-decoration: none;
    line-height: var(--f5);
    border-radius: 0.5rem;
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
    & a {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;

export const Wrapper = styled.div`
  & span {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    & span {
      display: block;
      line-height: var(--f7);
      font-weight: bold;
      font-size: var(--f5);
      padding: 0 1rem;
    }
  }
`;

export const HeaderRight = styled.div`
  float: right;
  @media screen and (max-width: 500px) {
    float: none;
    display: ${props => (props.show ? 'none' : 'block')};
  }
`;
