export const localStorageService = {
  getCurrentTheme: function () {
    return localStorage.getItem('theme');
  }
};
