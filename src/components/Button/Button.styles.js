import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => `var(--${props.color}-color)`};
  border: none;
  color: var(--text);
  cursor: pointer;
  border-radius: 0.4rem;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
`;
