import { Theme, ThemeProviderProps } from "@emotion/react";
import { createContext, useContext } from "react";
import { defaultTheme } from "./themeProvider.caonstat";

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
