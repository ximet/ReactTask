import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => `var(--${props.color}-color)`};
  border: none;
  color: var(--text);
  cursor: pointer;
  border-radius: var(--x2);
  padding: var(--x1) var(--x2);
  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding: var(--x1) var(--x2);
    font-size: var(--f1);
    font-weight: normal;
  }
`;
