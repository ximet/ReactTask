import React, { FunctionComponent, Suspense, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Store
import { authorize, authenticate } from 'redux/actionCreators/auth';

// Types
import type { AuthorizationRequest, AuthenticationResponse } from 'types';

// Components
import Layout from 'hoc/Layout/Layout';

// Lazy components
const LocationPage = React.lazy(() => import('components/LocationPage/LocationPage'));
const AboutPage = React.lazy(() => import('components/AboutPage/AboutPage'));
const FeedbackPage = React.lazy(() => import('components/FeedbackPage/FeedbackPage'));
const NotFoundPage = React.lazy(() => import('components/NotFoundPage/NotFoundPage'));

// Routes
const routes = [
  { path: '/', name: 'Home', Component: LocationPage },
  { path: '/locations/:locationId', name: 'Location', Component: LocationPage },
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/feedback', name: 'Feedback', Component: FeedbackPage },
  { path: '*', name: '404', Component: NotFoundPage }
];

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAuth = useCallback(async () => {
    const res = await dispatch(authenticate());

    const credentials: AuthorizationRequest = {
      user: process.env.USER,
      password: process.env.PASSWORD
    };

    if (!((res as unknown) as AuthenticationResponse).data.token) {
      await dispatch(authorize(credentials));
    }
  }, [dispatch]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
