import React from 'react';
import Main from '../main/Main';

import styles from './App.css';

import { FC } from 'react';
import { usePosition } from 'hooks/usePosition';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { Countries } from 'components/countries/Countries';
import { Details } from 'components/details/Details';
import { Feedback } from 'components/feedback/Feedback';
import { Page404 } from 'components/page404/Page404';

const App: FC = () => {
  const { position, error } = usePosition();

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main positionData={position} positionError={error} />} />
            <Route path="countries" element={<Countries />} />
            <Route path="details" element={<Details />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
