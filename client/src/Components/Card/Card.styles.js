import styled from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('theme', {
  light: '#00bfff',
  dark: '#243145'
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fafafa'
});

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
  background: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
`;

export const WeatherInfoContainer = styled.div`
  background: ${backgroundColor};
  display: flex;
  align-items: center;
  color: ${textColor};
  padding: 0.5rem 1rem;
`;

export const Temperature = styled.div`
  flex: 0 0 45%;
  width: 100%;
  font-size: 5rem;
  display: flex;
  justify-content: space-around;
`;

export const Conditions = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 100;
  margin: 0.75rem 0 0 0;
`;

export const Details = styled.div`
  margin: 0.5rem 0;
  & p {
    margin: 0.25rem 0 0;
    font-size: 0.85rem;
  }
  @media screen and (max-width: 500px) {
    & p {
      font-size: 1rem;
    }
  }
`;

export const Date = styled.div`
  background: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textColor};
  padding: 1rem 0;
  font-size: 1.25rem;
  font-weight: 800;
`;
