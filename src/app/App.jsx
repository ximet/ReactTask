import * as React from 'react';
import { useAuth } from 'hooks';
import { PublicLayout, PrivateLayout } from './layouts';

const PublicRoutes = React.lazy(() => import('pages/public'));
const PrivateRoutes = React.lazy(() => import('pages/private'));

const App = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <PrivateLayout>
      <PrivateRoutes />
    </PrivateLayout>
  ) : (
    <PublicLayout>
      <PublicRoutes />
    </PublicLayout>
  );
};

export default App;
