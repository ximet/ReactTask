import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, ThemeProvider } from './providers';
import { PublicLayout, PrivateLayout } from './layouts';

const PublicRoutes = React.lazy(() => import('pages/public'));
const PrivateRoutes = React.lazy(() => import('pages/private'));

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider>
          {(isLoggedIn) =>
            isLoggedIn ? (
              <PrivateLayout>
                <PrivateRoutes />
              </PrivateLayout>
            ) : (
              <PublicLayout>
                <PublicRoutes />
              </PublicLayout>
            )
          }
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
