import styled from 'styled-components';
import * as Components from 'components';

export const Box = styled(Components.Card)`
  margin-top: ${(props) => props.theme.spacing(40)};
`;

export const Header = styled('header')`
  display: flex;
  justify-content: space-between;
`;
