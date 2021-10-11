import styled from 'styled-components';
import { Grid } from 'components';

export const Main = styled(Grid.Container)`
  --header-height: calc(
    2rem + ${(props) => props.theme.spacing()} +
      ${(props) => props.theme.spacing(8)}
  );

  height: calc(100vh - var(--header-height));
`;
