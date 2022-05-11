import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: inline-block;
  margin: 0.25rem auto 0.25rem 0.5rem;
  @media screen and (max-width: 500px) {
    margin: 0.2rem auto;
  }
`;

export const Button = styled.button`
  color: var(--black-color);
  background: transparent;
  border-radius: var(--f3);
  border: 1px solid var(--black-color);
  padding: var(--x2);

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    border: none;
    font-size: var(--f1);
  }
`;
