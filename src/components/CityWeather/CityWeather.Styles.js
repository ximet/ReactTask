import styled from 'styled-components';
import { colors } from '../../common/cssVariables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30em;
  width: 25em;
  margin: 0 auto;
`;
export const Title = styled.h2`
  text-align: start;
  width: inherit;
  text-transform: capitalize;
`;
export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25em;
  height: 5em;
`;
export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RealTemperature = styled.div`
  font-size: 3em;
  color: ${colors.red};
`;
export const FeelsTemperature = styled.span`
  color: ${colors.red};
`;
export const WindSpeed = styled.span`
  color: ${colors.blue_dark};
`;
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25em;
  height: 3em;
`;
export const WeatherPhrase = styled.div`
  font-size: large;
  text-transform: capitalize;
`;
