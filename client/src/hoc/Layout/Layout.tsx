import React, { FunctionComponent } from 'react';

// Custom hooks
import { useAppSelector } from 'redux/hooks';

// Components
import Header from 'components/Header/Header';

// Styles
import GlobalStyle from './Layout.styles';

const Layout: FunctionComponent = ({ children }) => {
  const theme = useAppSelector(state => state.theme);

  return (
    <>
      <GlobalStyle themeType={theme} />
      <Header />
      {children}
    </>
  );
};

export default Layout;
