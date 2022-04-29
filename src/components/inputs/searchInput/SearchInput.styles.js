import styled from 'styled-components';

export const InputWrapper = styled.div`
  & input {
    border: 1px solid var(--dark-grey-color);
    border-radius: var(--x2);
    font-size: var(--x3);
    padding: var(--x3);
    height: var(--x5);
    width: 300px;

    &:focus {
      border: 1px solid var(--borders);
      outline: none;
    }

    @media screen and (max-width: 500px) {
      width: 250px;
      padding: var(--x2);
      height: var(--x4);
    }
  }
`;
