import styled from 'styled-components';

export const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
`;

export const Dropdown = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  &:empty {
    border: none;
  }
`;
export const DropdownRow = styled.div`
  cursor: pointer;
  text-align: start;
  margin: 2px 0;
`;

export const SearchInner = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 220px;
`;
