import * as React from 'react';
import { Main, Header } from './components';

const PrivateLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default PrivateLayout;
