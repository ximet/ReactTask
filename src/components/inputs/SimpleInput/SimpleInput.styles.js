import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: var(--f3);

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input,
  label {
    display: block;
  }

  & input {
    padding: 0.5rem;
    border-radius: var(--x1);
    border: 0.01rem solid var(--dark-grey-color);
    width: 100%;
    box-sizing: border-box;
  }

  & input:focus {
    outline: none;
    border-color: ${props => (props.showError ? '#8f0000' : '#26e300')};
    background-color: ${props => (props.showError ? '#ff7878' : '#F1F1F1')};
  }

  @media screen and (max-width: 500px) {
    padding: 0.25rem;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--input-error);
  margin: 0.5rem auto;
`;
