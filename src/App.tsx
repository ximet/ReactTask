import React, { FunctionComponent, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Store
import { useLoginMutation } from './services/forecaApi';
import { setCredentials } from './features/auth/authSlice';
import { useAppDispatch } from './app/hooks';

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
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      const result = await login({
        user: process.env.USER,
        password: process.env.PASSWORD
      });
      if ((result as any).data) {
        dispatch(setCredentials((result as any).data.access_token));
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
