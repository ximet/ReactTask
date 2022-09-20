import React, { FunctionComponent } from 'react';

// Custom hooks
import { useAppSelector } from 'redux/hooks';

// Styles
import GlobalStyle from './Layout.styles';

const Layout: FunctionComponent = ({ children }) => {
  const theme = useAppSelector(state => state.theme);

  return (
    <>
      <GlobalStyle themeType={theme} />
      {children}
    </>
  );
};

export default Layout;
