import styled from 'styled-components';

export const ContactContainer = styled.div`
  margin: 0.5rem auto 1rem auto;
`;

export const ContactTitleWrapper = styled.h1`
  margin: 0.5rem 0;
  @media screen and (max-width: 500px) {
    font-size: var(--f4);
  }
`;

export const ContactWrapper = styled.section`
  background-color: var(--grey-color);
  padding: 1.5rem 2rem;
  border-radius: var(--x4);
  margin: 0.5rem 0;

  & p {
    max-width: 100%;
    margin: 0.25rem auto;
    font-weight: bold;
    font-size: var(--f3);
  }

  & a {
    color: var(--warning-color);
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 3rem;
  }
`;

export const TitleWrapper = styled.h2`
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: var(--f2);
  }
`;
