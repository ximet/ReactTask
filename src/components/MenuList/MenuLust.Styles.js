import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UlContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: end;
  margin: 0 2em;
`;

export const LiItems = styled.li`
  display: inline-block;
  margin: 0 0.5em;
  font-size: 1.5em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
