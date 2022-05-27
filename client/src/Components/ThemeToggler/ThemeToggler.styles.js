import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;
