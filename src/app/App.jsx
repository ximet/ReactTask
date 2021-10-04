import { lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, ThemeProvider } from './providers';
import { PublicLayout, PrivateLayout } from './layouts';

const PublicRoutes = lazy(() => import('pages/public'));
const PrivateRoutes = lazy(() => import('pages/private'));

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
