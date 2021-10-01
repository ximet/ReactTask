import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, ThemeProvider } from './providers';
import Layout from './layout';

const PublicRoutes = lazy(() => import('pages/public'));
const PrivateRoutes = lazy(() => import('pages/private'));

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider>
          {(isLoggedIn) =>
            isLoggedIn ? (
              <Layout>
                <PrivateRoutes />
              </Layout>
            ) : (
              <Suspense fallback={null}>
                <PublicRoutes />
              </Suspense>
            )
          }
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
