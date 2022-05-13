import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin: 1rem 1rem 1rem 1rem;
    padding: 1rem;
`;

export const CardContainer = styled.div`
  background-color: gray;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;

export const Description = styled.div`
  margin: 0 0 0.25rem 0;
  font-size: 16px;
  font-weight: bold;
`;
