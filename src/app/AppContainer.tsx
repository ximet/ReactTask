import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'store/types';
import { ThemeProvider } from './providers';
import App from './App';

interface AppContainerProps {
  store: Store;
}

const AppContainer: React.FC<AppContainerProps> = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default AppContainer;
