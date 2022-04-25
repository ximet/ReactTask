import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  text-align: center;
`;

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 10rem;
  height: 10rem;
  & .path {
    stroke: rgb(250, 45, 45);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
