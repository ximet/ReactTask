import { Suspense } from 'react';
import { Main, Header } from './components';

const PrivateLayout = ({ children }) => (
  <>
    <Header />
    <Main>
      <Suspense fallback={null}>{children}</Suspense>
    </Main>
  </>
);

export default PrivateLayout;
