import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  & td,
  th {
    border: 0.01rem solid rgb(241, 241, 241);
    padding: 0.5rem 1rem;
    @media screen and (max-width: 500px) {
      padding: 0.2rem 0.3rem;
    }
  }
  & tr:nth-child(even) {
    background-color: rgb(242, 242, 242);
  }
  & tr:hover {
    background-color: rgb(221, 221, 221);
  }
  & th {
    padding: 1rem 0;
    background-color: rgb(81, 81, 81);
    color: rgb(255, 255, 255);
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
    width: 90%;
    margin: 0 auto 3rem auto;
  }
`;
