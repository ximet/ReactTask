import * as React from 'react';
import { Main, Header } from './components';

const PrivateLayout = ({ children }) => (
  <>
    <Header />
    <Main>
      <React.Suspense fallback={null}>{children}</React.Suspense>
    </Main>
  </>
);

export default PrivateLayout;
