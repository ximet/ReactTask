import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

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
      <Outlet />
    </>
  );
};

export default Layout;
