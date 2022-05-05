import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props =>
    props.color === 'primary' ? 'var(--warning-color)' : 'var(--success-message)'};
  border: none;
  color: var(--text);
  cursor: pointer;
  border-radius: 0.4rem;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
`;
