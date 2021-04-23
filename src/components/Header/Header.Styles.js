import styled from 'styled-components';
import { FILTERABLE_LIST_WIDTH, HEADER_HEIGHT } from '../../common/cssVariables';

export const Header = styled.header`
  display: grid;
  grid-template-columns: ${FILTERABLE_LIST_WIDTH} 3fr 1fr;
  grid-template-rows: ${HEADER_HEIGHT};
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  height: ${HEADER_HEIGHT};
  padding: 0;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled(Container)`
  font-size: 1.5em;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Theme = styled.span`
  text-transform: capitalize;
`;
