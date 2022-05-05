import styled from 'styled-components';
import { label, display, input, inputFocus, inputMedia, errorMessage } from '../Inputs.styles';

export const InputWrapper = styled.div`
  margin-bottom: var(--f3);
  & label {
    ${label}
  }
  & input,
  label {
    ${display}
  }
  & input {
    ${input}
  }
  & input:focus {
    ${inputFocus}
  }
  @media screen and (max-width: 500px) {
    ${inputMedia}
  }
`;

export const ErrorMessage = styled.p`
  ${errorMessage}
`;
