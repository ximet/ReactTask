import styled from 'styled-components';

export const Container = styled.article`
  margin: 2rem auto 0 auto;
  width: 60%;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  background: var(--page-background);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
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
`;

export const Details = styled.div`
  margin: 0.5rem 0;
  & p {
    margin: 0.25rem 0 0;
    font-size: var(--f2);
  }
  @media screen and (max-width: 500px) {
    & p {
      font-size: var(--f3);
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
