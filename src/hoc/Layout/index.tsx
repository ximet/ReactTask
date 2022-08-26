import React, { FunctionComponent } from 'react';

// Styles
import GlobalStyle from './styles';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
