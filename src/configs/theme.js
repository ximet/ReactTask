const globalTheme = {
  shape: {
    borderRadius: '4px',
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;',
  },
  spacing: (multiplier = 1) => `${multiplier * 4}px`,
  typography: {
    fontFamily: [
      'Gilroy',
      'Mulish',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSizes: ['2.369rem', '1.777rem', '1.333rem', '1rem', '0.750rem'],
  },
  breakpoints: {
    values: {
      xs: '0px',
      sm: '480px',
      md: '1024px',
      lg: '1600px',
      xl: '1920px',
    },
  },
  transition: '0.15s ease-out',
  palette: {
    primary: {
      main: '#03A9F4',
      contrastText: '#FFFFFF',
      dark: '#0288D1',
      light: '#B3E5FC',
    },
    secondary: {
      main: '#536DFE',
    },
    divider: '#BDBDBD',
    error: {
      main: '#D32F2F',
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
};

export const lightTheme = {
  ...globalTheme,
  palette: {
    ...globalTheme.palette,
    text: { primary: '#212121', secondary: '#757575' },
    background: { main: '#FAFAFA', light: '#FFFFFF' },
  },
};

export const darkTheme = {
  ...globalTheme,
  palette: {
    ...globalTheme.palette,
    text: { primary: '#E0E0E0', secondary: '#757575' },
    background: { main: '#424242', light: '#616161' },
  },
};

export default globalTheme;
