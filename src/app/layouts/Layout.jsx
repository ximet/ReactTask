import { Suspense } from 'react';
import { Main, Header } from './private-layout/components';

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      <Suspense fallback={null}>{children}</Suspense>
    </Main>
  </>
);

export default Layout;
