import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Layout from './hoc/Layout';

// Lazy components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

const App = () => {
  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About }
  ];

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path} element={<Component />} exact />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
