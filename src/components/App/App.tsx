import { About, Card, Cities, Contacts, ErrorComponent, Footer, Header, Home } from 'components';
import { ENDPOINTS } from 'consts';
import { getData } from 'helpers';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext, AuthContextConfig, Theme, ThemeContext, ThemeContextConfig } from 'store';
import styles from './App.module.scss';

const App: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  const { userHasToken, setUserHasToken }: AuthContextConfig = useContext(AuthContext);

  useEffect(() => {
    !userHasToken && getAuthToken();
  }, [userHasToken]);

  const getAuthToken = (): void => {
    getData(ENDPOINTS.auth).then(() => {
      setUserHasToken(!!document.cookie);
    });
  };

  return (
    <BrowserRouter>
      <div className={`${styles.app} ${theme === Theme.DARK && styles[theme]}`}>
        <Header />
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path="cities">
            <Route index={true} element={<Cities />} />
            <Route path=":cityId" element={<Home />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="*"
            element={
              <Card>
                <ErrorComponent message="Page not found" button="HOME" />
              </Card>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
