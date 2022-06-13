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

export const Container = styled.section`
  margin: 0 auto;
  box-shadow: var(--card-shadow);
  width: 100%;
  animation: ${slideInTop} 1s ease-in;
`;

export const ImageContainer = styled.div`
  width: 100%;
  background: var(--page-background);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;

  @media screen and (max-width: 500px) {
    img {
      width: var(--f20);
    }
  }
`;

export const WeatherInfoContainer = styled.div`
  background: var(--container-background);
  display: flex;
  align-items: center;
  color: var(--text);
  padding: 0.5rem 1rem;
`;

export const Temperature = styled.div`
  flex: 0 0 45%;
  width: 100%;
  font-size: var(--f11);
  display: flex;
  justify-content: space-around;
`;

export const Conditions = styled.div`
  text-transform: uppercase;
  font-size: var(--f5);
  font-weight: 100;
  margin: 0.75rem 0 0 0;

  @media screen and (max-width: 500px) {
    font-size: var(--f3);
  }
`;

export const About = styled.div`
  margin: 0.5rem 0;
  & p {
    margin: 0.25rem 0 0;
    font-size: var(--f2);
  }

  @media screen and (max-width: 500px) {
    & p {
      font-size: var(--f1);
    }
  }
`;

export const Date = styled.div`
  background: var(--card-background);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);
  padding: 1rem 0;
  font-size: var(--f4);
  font-weight: 800;
`;
