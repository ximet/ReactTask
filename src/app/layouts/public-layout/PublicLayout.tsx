import * as React from 'react';
import { Grid } from 'components';

const PublicLayout: React.FC = ({ children }) => (
  <Grid.Container size="sm">{children}</Grid.Container>
);

export default PublicLayout;
