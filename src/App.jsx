import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer, Routes } from './components';
import { DarkModeContext } from './contexts/darkMode';
import { GlobalStyles } from './styles/globalStyles';
import * as S from './App.styles';

const App = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <Router>
      <Header />
      <GlobalStyles isDarkMode={isDarkMode} />
      <S.PageContainer>
        <Routes />
      </S.PageContainer>
      <Footer />
    </Router>
  );
};

export default App;
