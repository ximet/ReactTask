import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  & p,
  span {
    font-size: var(--f5);
    margin-bottom: 0;
    @media screen and (max-width: 500px) {
      font-size: var(--f3);
      line-height: var(--x4);
    }
  }
  & a {
    color: var(--warning-color);
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
    font-size: var(--x5);
  }
`;
export const ImageWrapper = styled.img`
  width: 30%;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;
