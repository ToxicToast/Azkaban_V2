import { memo, useCallback } from 'react';
import {
  useEventSource,
  useEventSourceListener,
} from '@react-nano/use-event-source';
import { useNotificationState } from '@azkaban/inventory-redux';

function SSE() {
  const { addNotification } = useNotificationState();

  const [eventSource] = useEventSource(
    'https://events.toxictoast.de/api/sse/notification',
  );

  const addNotificationAction = useCallback(
    (event: string, id: string, title: string, created_at: Date) => {
      addNotification({
        event,
        id,
        title,
        created_at,
      });
    },
    [addNotification],
  );

  useEventSourceListener(
    eventSource,
    ['inventory-category-created'],
    (event) => {
      const data = JSON.parse(event.data);
      addNotificationAction(
        'inventory-category-created',
        data.id,
        data.title,
        data.created_at,
      );
    },
  );

  useEventSourceListener(
    eventSource,
    ['inventory-company-created'],
    (event) => {
      const data = JSON.parse(event.data);
      addNotificationAction(
        'inventory-company-created',
        data.id,
        data.title,
        data.created_at,
      );
    },
  );

  useEventSourceListener(eventSource, ['inventory-item-created'], (event) => {
    const data = JSON.parse(event.data);
    addNotificationAction(
      'inventory-item-created',
      data.id,
      data.title,
      data.created_at,
    );
  });

  useEventSourceListener(
    eventSource,
    ['inventory-location-created'],
    (event) => {
      const data = JSON.parse(event.data);
      addNotificationAction(
        'inventory-location-created',
        data.id,
        data.title,
        data.created_at,
      );
    },
  );

  useEventSourceListener(eventSource, ['inventory-size-created'], (event) => {
    const data = JSON.parse(event.data);
    addNotificationAction(
      'inventory-size-created',
      data.id,
      data.title,
      data.created_at,
    );
  });

  useEventSourceListener(eventSource, ['inventory-type-created'], (event) => {
    const data = JSON.parse(event.data);
    addNotificationAction(
      'inventory-type-created',
      data.id,
      data.title,
      data.created_at,
    );
  });

  return null;
}

export default memo(SSE);
