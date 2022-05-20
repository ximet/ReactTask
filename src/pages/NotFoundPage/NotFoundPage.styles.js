import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  & a {
    color: var(--black-color);
    font-size: var(--f5);
    @media screen and (max-width: 500px) {
      font-size: var(--f2);
    }
  }
`;

export const Title = styled.h1`
  color: var(--warning-color);
  font-size: var(--f10);
  margin: var(--f4) auto;
  @media screen and (max-width: 500px) {
    margin: var(--f2) auto;
  }
`;
