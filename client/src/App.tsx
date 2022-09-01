import React, { FunctionComponent, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Store
import { setCredentials } from './features/auth/authSlice';
import { useAppDispatch } from './app/hooks';

// Types
import { LoginResponse, LoginRequest } from './types';

// Components
import Layout from './common/hoc/Layout';

// Lazy components
const Home = React.lazy(() => import('./common/pages/Home'));
const About = React.lazy(() => import('./common/pages/About'));

// Routes
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About }
];

const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      const body: LoginRequest = {
        user: process.env.USER,
        password: process.env.PASSWORD
      };
      const res = await axios.post<LoginResponse>('http://localhost:3000/auth', body, {
        withCredentials: true
      });
      if (res.data.token) {
        dispatch(setCredentials(res.data.token));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

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
