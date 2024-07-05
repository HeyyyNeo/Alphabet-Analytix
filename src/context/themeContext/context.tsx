import { createContext, useState } from "react";

export type themeContextValues = {
  theme: string;
  handleThemeChanges: Function;
};

export const ThemeContext = createContext<themeContextValues | null>(null);

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("system");

  const handleThemeChanges = (theme: string) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleThemeChanges,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
