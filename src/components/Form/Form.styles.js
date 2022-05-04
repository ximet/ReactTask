import styled from 'styled-components';

export const FormWrapper = styled.form`
  padding: 3rem 3rem 0.5rem;
  background-color: var(--grey-color);
  width: 50%;
  margin: 0.5rem auto;
  border-radius: var(--f4);
  @media screen and (max-width: 500px) {
    padding: 1.5rem 2rem;
    width: 80%;
  }
`;

export const SubmitMessageWrapper = styled.p`
  text-align: center;
  color: var(--success-message);
  font-size: var(--f4);
  padding: 0.25rem 0.5rem;
  border-radius: var(--f4);
  margin: 0.5rem auto;
`;
