import styled from 'styled-components';
import theme from 'styled-theming';

export const searchTextColor = theme('theme', {
  light: '#2d2d2d',
  dark: '#fff'
});

export const Container = styled.div`
  padding: 1rem;
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
  color: ${searchTextColor};
  opacity: 0.5;
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

export const SaveButton = styled.button`
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

export const DeleteWrapper = styled.button`
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
