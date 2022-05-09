import styled from 'styled-components';
import { label, display, input, inputFocus, errorMessage } from '../Inputs.styles';

export const TextareaWrapper = styled.div`
  margin-bottom: var(--f3);
  & label {
    ${label}
  }
  & textarea,
  label {
    ${display}
  }
  & textarea {
    ${input}
  }
  & textarea:focus {
    ${inputFocus}
  }
`;

export const ErrorMessage = styled.p`
  ${errorMessage}
`;
