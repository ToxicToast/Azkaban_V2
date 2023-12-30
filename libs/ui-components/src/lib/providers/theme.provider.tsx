import {
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

interface ContextProps {
  theme: string;
  toggleTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext({} as ContextProps);

export function ThemeProvider(props: PropsWithChildren) {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = useCallback((theme: 'light' | 'dark') => {
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') ?? null;
    if (localTheme !== null) {
      setTheme(localTheme);
    }
  }, []);

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
