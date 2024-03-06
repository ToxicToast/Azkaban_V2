import { Sonner, useToasts } from '@azkaban/ui-components';
import { useCallback, useEffect } from 'react';
import { toast } from 'sonner';
import { Optional } from '@azkaban/shared';

export function Toaster() {
  const { toasts, removeToast } = useToasts();

  const callToasts = useCallback(
    (
      id: string,
      title: string,
      variant: string,
      description?: Optional<string>,
    ) => {
      switch (variant) {
        case 'success':
          toast.success(title, { id, description });
          break;
        case 'warning':
          toast.warning(title, { id, description });
          break;
        case 'error':
          toast.error(title, { id, description });
          break;
        case 'info':
          toast.info(title, { id, description });
          break;
        default:
          toast(title, { id, description });
          break;
      }
    },
    [],
  );

  useEffect(() => {
    toasts.forEach((t) => {
      const duration = 3000;
      //
      const type = t.type;
      const title = t.title ?? t.text;
      const description = t.title !== undefined ? t.text : undefined;
      //
      callToasts(t.id, title, type, description);
      //
      const wait = setTimeout(() => {
        toast.dismiss(t.id);
        removeToast(t.id);
        clearTimeout(wait);
      }, duration);
    });
  }, [callToasts, removeToast, toasts]);

  return <Sonner position="bottom-right" expand={false} richColors={true} />;
}
