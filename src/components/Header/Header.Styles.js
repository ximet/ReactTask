import styled from 'styled-components';
import { filterableListWidth, headerHeight } from '../../common/cssVariables';

export const Header = styled.header`
  display: grid;
  grid-template-columns: ${filterableListWidth} 3fr 1fr;
  grid-template-rows: ${headerHeight};
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  height: ${headerHeight};
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
