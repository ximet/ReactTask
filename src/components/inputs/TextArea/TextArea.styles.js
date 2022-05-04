import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  margin-bottom: var(--f3);

  & label {
    font-weight: bold;
    margin-bottom: var(--f1);
  }

  & textarea,
  label {
    display: block;
  }

  & textarea {
    padding: var(--f1);
    border-radius: var(--x1);
    border: 0.01rem solid var(--dark-grey-color);
    width: 100%;
    min-height: var(--f20);
    box-sizing: border-box;
  }

  & textarea:focus {
    outline: none;
    border-color: ${props => (props.showError ? '#8f0000' : '#26e300')};
    background-color: ${props => (props.showError ? '#ff7878' : '#F1F1F1')};
  }
`;

export const ErrorMessage = styled.p`
  color: var(--input-error);
  margin: var(--f1) auto;
`;
