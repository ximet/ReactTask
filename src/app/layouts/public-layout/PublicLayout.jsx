import * as React from 'react';
import { Grid } from 'components';

const PublicLayout = ({ children }) => (
  <Grid.Container size="sm">
    <React.Suspense fallback={null}>{children}</React.Suspense>
  </Grid.Container>
);

export default PublicLayout;
