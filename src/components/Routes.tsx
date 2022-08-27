import React from 'react';
import { Route, Routes as RoutesPaths } from 'react-router-dom';
import Layout from './layouts/index';
import Main from '../pages/Main/index';
import Details from '../pages/Details/index';
import Info from '../pages/Info/index';
import Feedback from '../pages/Feedback/index';

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
