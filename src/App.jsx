import React, { useContext } from 'react';
import { Header, Footer } from './components';
import { Routes } from './config/Routes';
import { DarkModeContext } from './contexts/darkMode';
import { GlobalStyles } from './styles/globalStyles';
import * as S from './App.styles';

const App = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <Header />
      <GlobalStyles isDarkMode={isDarkMode} />
      <S.PageContainer>
        <Routes />
      </S.PageContainer>
      <Footer />
    </>
  );
};

export default App;
