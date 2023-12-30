import { useCallback, useContext, useMemo } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { ThemeContext } from '../providers';
import { Button } from '../shadn';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const switchTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  }, [theme, toggleTheme]);

  const showIcon = useMemo(() => {
    if (theme === 'light') {
      return <MoonIcon />;
    } else {
      return <SunIcon />;
    }
  }, [theme]);

  return <Button onClick={() => switchTheme()}>{showIcon}</Button>;
}
