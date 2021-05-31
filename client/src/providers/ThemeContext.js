import React from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = React.createContext()

function ThemeProvider({ initialTheme, children }){
  const {colorTheme, setTheme} = useTheme()

  return (
    <ThemeContext.Provider value={{ colorTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider