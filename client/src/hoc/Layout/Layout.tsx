import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

// Store
import { selectTheme } from 'redux/reducers/global';

// Custom hooks
import { useAppSelector } from 'redux/hooks';

// Components
import Sidebar from 'components/Sidebar/Sidebar';

// Styles
import GlobalStyle from './Layout.styles';

const Layout: FunctionComponent = ({ children }) => {
  const theme = useAppSelector(selectTheme);
  const sidebarOpen = useAppSelector(state => state.global.sidebarOpen);

  return (
    <>
      <GlobalStyle themeType={theme} />
      <Sidebar open={sidebarOpen} />
      {children}
      <Outlet />
    </>
  );
};

export default Layout;
