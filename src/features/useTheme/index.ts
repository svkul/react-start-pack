import { useState } from "react";

export enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export interface IUseTheme {
  theme: ETheme;
  toggleTheme: () => void;
}

export const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

export function useTheme(): IUseTheme {
  const [theme, setTheme] = useState<ETheme>(
    document.querySelector("body")?.dataset.theme as ETheme
  );

  const toggleTheme = () => {
    const body = document.querySelector("body");

    const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;

    setTheme(newTheme);
    if (body) {
      body.dataset.theme = newTheme;
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
