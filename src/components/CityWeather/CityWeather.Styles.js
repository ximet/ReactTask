import styled from 'styled-components';
import { temperatureTextColor, windTextColor } from '../../common/cssVariables';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30em;
  width: 25em;
  margin: 0 auto;
`;
export const H2Name = styled.h2`
  text-align: start;
  width: inherit;
  text-transform: capitalize;
`;
export const DivBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25em;
  height: 5em;
`;
export const DivTemperature = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DivRealTemperature = styled.div`
  font-size: 3em;
  color: ${temperatureTextColor};
`;
export const SpanFeelsTemperature = styled.span`
  color: ${temperatureTextColor};
`;
export const SpanWindSpeed = styled.span`
  color: ${windTextColor};
`;
export const DivFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25em;
  height: 3em;
`;
export const SpanText = styled.div`
  font-size: large;
  text-transform: capitalize;
`;
