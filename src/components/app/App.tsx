import Main from '../main/Main';

import styles from './App.css';
import commonStyles from '../../styles/commonStyles.css';

import React, { FC, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PositionContextProvider } from '../../context/positionContext';

import { Layout } from 'components/Layout';
import { Countries } from 'components/countries/Countries';
import { About } from 'components/about/About';
import { Feedback } from 'components/feedback/Feedback';
import { Page404 } from 'components/page404/Page404';
import { setInLocalStorage, getFromLocalStorage } from 'services/localStorage';

import { store } from 'store';
import { Provider } from 'react-redux';

const App: FC = () => {
  const [token, setToken] = useState<string>('');

  async function getToken(): Promise<string> {
    const result = await fetch('http://localhost:8081/token');

    const { access_token } = await result.json();
    setInLocalStorage(access_token, 'token');

    return access_token;
  }

  useEffect(() => {
    const token = getFromLocalStorage('token');

    token ? setToken(token) : getToken().then(token => setToken(token));
  }, []);

  return (
    <div className={styles.app}>
      {token ? (
        <Provider store={store}>
          <PositionContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="/:coordinates" element={<Main />} />
                  <Route path="countries" element={<Countries />} />
                  <Route path="about" element={<About />} />
                  <Route path="feedback" element={<Feedback />} />
                  <Route path="*" element={<Page404 />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </PositionContextProvider>
        </Provider>
      ) : (
        <div className={commonStyles.container}>
          <p className={styles['loading-text']}>loading...</p>
        </div>
      )}
    </div>
  );
};

export default App;
