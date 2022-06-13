import styled, { keyframes } from 'styled-components';

const slideInTop = keyframes`
from {
      transform: translateY(100%);
      opacity: 0;
    }
to {
      transform: translateY(0%);
      opacity: 1;
    }
`;

export const Wrapper = styled.section`
  background-color: var(--container-background);
  padding: var(--f1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--card-shadow);
  box-sizing: border-box;
  animation: ${slideInTop} 1.8s ease-in;

  & h1 {
    color: var(--text);
    margin: 0;
    font-size: var(--f10);

    @media screen and (max-width: 500px) {
      font-size: var(--f5);
    }
  }

  & h2 {
    margin: 0;
    color: var(--text);

    @media screen and (max-width: 500px) {
      font-size: var(--f3);
    }
  }
`;
