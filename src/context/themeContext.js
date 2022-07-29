import React, { Component } from 'react';
import { saveState, loadState } from '../DataService/localDataService';
const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'dark'
  };

  getTheme() {
    const storedTheme = loadState('theme');
    return !storedTheme || storedTheme === 'light' ? 'dark' : 'light';
  }

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === 'light' ? 'dark' : 'light'
      };
    });
    saveState('theme', this.state.theme);
  };

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContextProvider, ThemeContext };
