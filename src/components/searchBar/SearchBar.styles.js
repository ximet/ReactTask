import styled from 'styled-components';

export const ResultWrapper = styled.div`
  margin-top: 5px;
  width: 300px;
  max-height: 100px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;

export const ResultItems = styled.div`
  padding: 0.5rem;
  color: var(--dark-grey-color);
`;
