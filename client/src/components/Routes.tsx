import React from 'react';
import { Route, Routes as RoutesPaths } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from '../pages/Main/index';
import Details from '../pages/Details/index';
import Info from '../pages/Info/index';
import Feedback from '../pages/Feedback/index';
import LayoutSearch from './layouts/LayoutSearch';
import Error from './ErrorPage/Error';

const Routes: React.FC = () => {
  return (
    <RoutesPaths>
      <Route path="/" element={<LayoutSearch />}>
        <Route index element={<Main />} />
        <Route path="details/:location" element={<Details />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<Info />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<Error />} />
      </Route>
    </RoutesPaths>
  );
};

export default Routes;
