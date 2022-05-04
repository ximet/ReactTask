import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => props.background || 'transparent'};
  border: ${props => (props.border ? `0.1rem solid ${props.border}` : 'none')};
  color: ${props => props.text || 'blue'};
  cursor: pointer;
  border-radius: 0.4rem;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
`;
