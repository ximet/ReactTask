import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

// Store
import { selectTheme } from 'redux/reducers/global';

// Custom hooks
import { useAppSelector } from 'redux/hooks';

// Components
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

// Styles
import GlobalStyle from './Layout.styles';

const Layout: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);
  const sidebarOpen = useAppSelector(state => state.global.sidebarOpen);

  return (
    <>
      <GlobalStyle themeType={theme} />
      <Header />
      <Sidebar open={sidebarOpen} />
      <Outlet />
    </>
  );
};

export default Layout;
