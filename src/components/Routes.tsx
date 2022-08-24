// @ts-ignore
import React from 'react';
// @ts-ignore
import { Route, Routes as RoutesPaths } from 'react-router-dom';
// @ts-ignore
import Layout from '../components/layouts/index.tsx';
// @ts-ignore
import Main from '../pages/Main/index.tsx';
// @ts-ignore
import Details from '../pages/Details/index.tsx';
// @ts-ignore
import Info from '../pages/Info/index.tsx';
// @ts-ignore
import Feedback from '../pages/Feedback/index.tsx';

const Routes: React.FC = () => {
  return (
    <RoutesPaths>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="details" element={<Details />} />
        <Route path="info" element={<Info />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </RoutesPaths>
  );
};

export default Routes;
