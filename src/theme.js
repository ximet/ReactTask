const globalTheme = {
  shape: { borderRadius: 2 },
  spacing: 4,
  typography: {
    fontFamily: [
      'Gilroy',
      'Mulish',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 1024,
      lg: 1600,
      xl: 1920,
    },
  },
};

export const lightTheme = {
  ...globalTheme,
  palette: {
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
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
    background: { main: '#F5F5F5' },
  },
};

export const darkTheme = {
  ...globalTheme,
  palette: {
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
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
    background: { main: '#F5F5F5' },
  },
};
