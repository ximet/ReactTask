import styled from 'styled-components';

export const ErrorWrapper = styled.p`
  color: var(--warning-color);
  margin: 0.5rem 0 0 0.5rem;
`;

export const PlaceDescription = styled.h2`
  margin: 2.5rem auto 0.5rem auto;
  @media screen and (max-width: 500px) {
    font-size: var(--f4);
  }
`;

export const Title = styled.h1`
  @media screen and (max-width: 500px) {
    font-size: var(--f2);
  }
`;
