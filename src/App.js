import AppContainer from './AppContainer.js';
import { ThemeProvider } from './context/ThemeContext.js';
import './App.css';
import useAuthorize from './customHooks/useAuthorize';

const App = () => {
  useAuthorize();
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
