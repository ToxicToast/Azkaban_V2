import { useMemo } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

interface Props {
  theme: string;
}

export function ThemeToggleIconPartial(props: Props) {
  const showIcon = useMemo(() => {
    if (props.theme === 'light') {
      return <MoonIcon />;
    } else {
      return <SunIcon />;
    }
  }, [props.theme]);

  return <>{showIcon}</>;
}
