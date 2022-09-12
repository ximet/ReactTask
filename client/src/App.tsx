import React, { FunctionComponent, Suspense, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Store
import { authorize, authenticate } from 'redux/actionCreators/auth';

// Types
import type { AuthorizationRequest } from 'types';

// Components
import Layout from 'hoc/Layout/Layout';

// Lazy components
const HomePage = React.lazy(() => import('components/HomePage/HomePage'));
const AboutPage = React.lazy(() => import('components/AboutPage/AboutPage'));

// Routes
const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/about', name: 'About', Component: AboutPage }
];

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAuth = useCallback(async () => {
    const token = await dispatch(authenticate());

    const credentials: AuthorizationRequest = {
      user: process.env.USER,
      password: process.env.PASSWORD
    };

    if (!token) {
      await dispatch(authorize(credentials));
    }
  }, [dispatch]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default App;
