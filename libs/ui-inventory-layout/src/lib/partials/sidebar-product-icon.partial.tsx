import { useMemo } from 'react';
import { BarcodeIcon } from 'lucide-react';

interface Props {
  currentPath: string;
  shouldPath: string;
}

export function SidebarProductIconPartial(props: Props) {
  const fillColor = useMemo(() => {
    return props.currentPath === props.shouldPath
      ? 'text-indigo-200'
      : 'text-slate-800';
  }, [props.currentPath, props.shouldPath]);

  return (
    <BarcodeIcon className="shrink-0 h-6 w-6 fill-current" fill={fillColor} />
  );
}
