import styled from 'styled-components';

export const Button = styled.button`
  width: 7em;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  border-radius: 0.3em;
  outline: auto;
`;
