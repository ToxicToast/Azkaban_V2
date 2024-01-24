import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Show } from '@azkaban/ui-components';

interface Props {
  theme: string;
}

export function ThemeToggleIconPartial(props: Props) {
  return (
    <>
      <Show show={props.theme === 'light'}>
        <MoonIcon />
      </Show>
      <Show show={props.theme === 'dark'}>
        <SunIcon />
      </Show>
    </>
  );
}
