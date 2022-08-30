import React, { FunctionComponent } from 'react';

// Custom hooks
import { useAppSelector } from '../../redux/hooks';

// Components
import Header from '../../components/Header';

// Styles
import GlobalStyle from './styles';

const Layout: FunctionComponent = ({ children }) => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header />
      {children}
    </>
  );
};

export default Layout;