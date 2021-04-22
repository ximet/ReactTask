import { ThemeProvider } from 'styled-components';
import App from './components/App/style';
import useLocalStorage from './customHooks/useLocalStorage';
import { THEMES } from './common/constants';
import { GlobalStyle } from './styles/globalStyles';
import { themesMap, getTheme } from './styles/theme';

const Root = () => {
  const [storedValue, setValue] = useLocalStorage('mode', THEMES.light);
  const handleToggle = () => setValue(storedValue === THEMES.light ? THEMES.dark : THEMES.light);
  const theme = themesMap.get(storedValue);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyle />
      <App onClick={handleToggle} mode={storedValue} />
    </ThemeProvider>
  );
};

export default Root;
