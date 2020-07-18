import React, { createContext, useState, useContext, useCallback } from 'react';
import { DefaultTheme } from 'styled-components';

import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

interface ThemeContextData {
  theme: DefaultTheme;
  selectTheme(): void;
}

const ThemeDinContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeDinProvider: React.FC = ({ children }: React.Props<{}>) => {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  const selectTheme = useCallback(() => {
    setTheme(t => (t.title === 'dark' ? lightTheme : darkTheme));
  }, []);

  return (
    <ThemeDinContext.Provider
      value={{
        theme,
        selectTheme,
      }}
    >
      {children}
    </ThemeDinContext.Provider>
  );
};

export function useThemeDin(): ThemeContextData {
  const context = useContext(ThemeDinContext);

  return context;
}
