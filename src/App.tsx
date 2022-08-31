import React, { FunctionComponent, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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

const App: FunctionComponent = () => (
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
export default App;
