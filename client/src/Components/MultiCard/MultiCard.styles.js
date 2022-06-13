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

export const CardContainer = styled.div`
  background-color: gray;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Description = styled.div`
  margin: 1rem;
  font-size: 16px;
  font-weight: bold;
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
