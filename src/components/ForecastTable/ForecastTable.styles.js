import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  & td,
  th {
    border: 1px solid var(--black-color);
    padding: var(--x2) var(--x5);
    text-align: center;
    @media screen and (max-width: 500px) {
      padding: var(--x1) var(--x3);
    }
  }
  & tr:nth-child(even) {
    background-color: var(--grey-color);
  }

  & th {
    padding: var(--f3) 0;
    background-color: var(--page-background);
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: var(--f1);
  }

  & img {
    width: var(--f11);
    @media screen and (max-width: 500px) {
      width: var(--f8);
    }
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  font-size: var(--f2);
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: var(--x2);
  }
`;

export const Date = styled.div`
  font-style: italic;
`;
