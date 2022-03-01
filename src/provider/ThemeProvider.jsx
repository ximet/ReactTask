import { ThemeTypes, ThemeContext } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { changeVariables } from '../model/ChangeVariables';
import { Storage } from '../dataService/storage';

function ThemeProvider({ children, ...props }) {
  const [theme, setTheme] = useState(Storage.getTheme() || ThemeTypes.light);

  useEffect(() => {
    changeVariables(theme);
  }, []) 

  function changeTheme(theme) {
    Storage.setTheme(theme);

    setTheme(theme);
    
    changeVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
