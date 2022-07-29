import React, { Component } from 'react';
import { saveState, loadState } from '../DataService/localDataService';
const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'light'
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === 'dark' ? 'light' : 'dark'
      };
    });
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
