import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 1rem;
  padding: 1rem;
`;

export const DeleteButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const WeatherWrapper = styled.div`
  width: 400px;
  margin: 100px auto;
`;

export const weatherCard = styled.div`
  width: 400px;
  height: 200px;
  font-family: 'Open Sans';
  position: relative;
`;

export const currentTemp = styled.div`
  width: 220px;
  height: 200px;
  background: rgb(41, 41, 41);
  position: absolute;
  top: 0;
  left: 0;
`;

export const currentTempText = styled.div`
  font-size: 80px;
  text-align: center;
  display: block;
  font-weight: 300;
  color: rgb(255, 255, 255);
  padding: 20px 0 0;
`;

export const currentConditionsText = styled.div`
  font-size: 20px;
  text-align: center;
  display: block;
  font-weight: 300;
  color: rgb(255, 255, 255);
  padding: 20px 0 0;
`;

export const currentWeather = styled.div`
  width: 180px;
  height: 200px;
  background: gray;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
`;

export const LocationInfo = styled.div`
  color: rgb(255, 255, 255);
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  display: block;
`;
export const ConditionsInfo = styled.span`
  width: 180px;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgb(42, 178, 234);
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-align: center;
`;
