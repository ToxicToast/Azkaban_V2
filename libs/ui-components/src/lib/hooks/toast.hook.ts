import { useCallback, useEffect, useState } from 'react';
import { Subject, takeUntil } from 'rxjs';
import { Toasts, toastService } from '../services';
import { Optional } from '@azkaban/shared';

export function useToasts() {
  const [toasts, setToasts] = useState<Array<Toasts>>([]);

  useEffect(() => {
    const unsubscribe$ = new Subject();

    toastService
      .getToastObservable()
      .pipe(takeUntil(unsubscribe$))
      .subscribe((toasts) => {
        setToasts((prevToasts) => [...prevToasts, toasts]);
      });

    return () => {
      unsubscribe$.next('unsubscribe');
      unsubscribe$.complete();
    };
  }, []);

  const removeToast = useCallback((toastId: string) => {
    setToasts((toasts) => toasts.filter((t) => toastId !== t.id));
  }, []);

  const addToast = useCallback(
    (
      type: 'success' | 'danger' | 'warning' | 'info' | 'default',
      text: string,
      title?: Optional<string>,
    ) => {
      toastService.sendToast({ type: type, text, title });
    },
    [],
  );

  return {
    toasts,
    addToast,
    removeToast,
  };
}
