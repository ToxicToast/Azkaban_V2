import {
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { Optional } from '@azkaban/shared';

interface ContextProps {
  theme: string;
  toggleTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext({} as ContextProps);

interface Props {
  defaultTheme?: Optional<'light' | 'dark'>;
}

export function ThemeProvider(props: PropsWithChildren<Props>) {
  const [theme, setTheme] = useState<string>(props.defaultTheme ?? 'light');

  const toggleTheme = useCallback((theme: 'light' | 'dark') => {
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }, []);

  useEffect(() => {
    const localTheme =
      window.localStorage.getItem('theme') ?? props.defaultTheme ?? null;
    if (localTheme !== null) {
      setTheme(localTheme);
    }
  }, [props.defaultTheme]);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (body) {
      body.classList.remove('light', 'dark');
      body.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
