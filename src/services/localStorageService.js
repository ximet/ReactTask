export const localStorageService = {
  getCurrentTheme: function () {
    return localStorage.getItem('theme');
  },

  setCurrentTheme: function (theme) {
    localStorage.setItem('theme', theme);
  }
};
