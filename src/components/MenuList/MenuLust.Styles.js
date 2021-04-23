import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: end;
  margin: 0 2em;
`;

export const Item = styled.li`
  display: inline-block;
  margin: 0 0.5em;
  font-size: 1.5em;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;