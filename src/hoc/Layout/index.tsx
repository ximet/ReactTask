import React, { FunctionComponent } from 'react';

// Components
import Header from '../../components/Header';

// Styles
import GlobalStyle from './styles';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
  </>
);

export default Layout;
