// context/themeContext.tsx
import { Theme, ThemeProviderProps } from "@emotion/react";
import { createContext, useState, ReactNode } from "react";
import { defaultTheme, darkTheme } from "./themeProvider.constant";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface CustomThemeProviderProps extends ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  theme,
  children,
}: CustomThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    theme || defaultTheme
  );

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === defaultTheme ? darkTheme : defaultTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
