import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import App from '../App/style';
import useLocalStorage from '../CustomHooks/useLocalStorage';
import searchIcon from '../../../public/loupe.png';
import { COLORS, THEMES } from '../../common/constants';

const light = {
  primaryColor: COLORS.white_regular,
  primaryColorDarker: COLORS.white_dark,
  complimentaryColor: COLORS.blue_regular,
  secondaryColor: COLORS.grey_light,
  secondaryColorDarker: COLORS.grey_regular,
  errorColor: COLORS.red_regular,
  fontColor: COLORS.grey_dark
};

const dark = {
  primaryColor: COLORS.grey_dark,
  primaryColorDarker: COLORS.black_regular,
  complimentaryColor: COLORS.blue_regular,
  secondaryColor: COLORS.white_regular,
  secondaryColorDarker: COLORS.white_dark,
  errorColor: COLORS.red_regular,
  fontColor: COLORS.white_dark
};

export const themesMap = new Map([
  [THEMES.dark, dark],
  [THEMES.light, light]
]);

export const getTheme = mode => ({
  colors: mode,
  fontSize: {
    default: '1em',
    small: '0.75em'
  },
  padding: {
    default: '1em',
    big: '2em',
    xl: '3em',
    s: '0.5em',
    xs: '0.25em'
  },
  margin: {
    default: '1em'
  },
  height: {
    default: '59em',
    s: '3em'
  },
  width: {
    default: '120em',
    s: '10em'
  },
  borderRadius: {
    default: '0.75em'
  },
  backgroundImage: {
    image: `url(${searchIcon})`,
    size: '1em',
    position: '0.75em'
  }
});

const Theme = () => {
  const [storedValue, setValue] = useLocalStorage('mode', THEMES.light);
  const handleToggle = () => setValue(storedValue === THEMES.light ? THEMES.dark : THEMES.light);
  const mode = themesMap.get(storedValue);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <GlobalStyle />
      <App onClick={handleToggle} mode={storedValue} />
    </ThemeProvider>
  );
};

export default Theme;
