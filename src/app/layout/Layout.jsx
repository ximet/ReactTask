import { Suspense } from 'react';
import { Main, Header } from './components';

const Layout = ({ Routes }) => (
  <>
    <Header />
    <Main>
      <Suspense fallback={null}>
        <Routes />
      </Suspense>
    </Main>
  </>
);

export default Layout;
