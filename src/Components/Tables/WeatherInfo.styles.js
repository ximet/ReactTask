import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  & td,
  th {
    border: 0.01rem solid #f1f1f1;
    padding: 0.5rem 1rem;
    @media screen and (max-width: 500px) {
      padding: 0.2rem 0.3rem;
    }
  }
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  & tr:hover {
    background-color: #fafafa;
  }
  & th {
    padding: 1rem 0;
    background-color: #808080;
    color: rgb(255, 255, 255);
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
    width: 90%;
    margin: 0 auto 3rem auto;
  }
`;
