import * as React from 'react';
import * as Components from 'components';

const PublicLayout = ({ children }) => (
  <Components.Wrapper>
    <Components.Container size="sm">
      <React.Suspense fallback={null}>{children}</React.Suspense>
    </Components.Container>
  </Components.Wrapper>
);

export default PublicLayout;
