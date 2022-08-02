export function toggleTheme() {
  return {
    type: 'TOGGLE_THEME'
  };
}

export default function themeReducer(theme = 'light', action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return theme === 'light' ? 'dark' : 'light';

    default:
      return theme;
  }
}
