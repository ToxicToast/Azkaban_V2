import { memo, useEffect } from 'react';
import {
  useEventSource,
  useEventSourceListener,
} from '@react-nano/use-event-source';

function SSE() {
  const [eventSource, eventSourceStatus] = useEventSource(
    'https://events.toxictoast.de/api/sse/notification',
  );

  useEventSourceListener(
    eventSource,
    ['inventory-category-created'],
    (event) => {
      console.log('inventory-category-created', 'event', event);
    },
  );

  useEventSourceListener(
    eventSource,
    ['inventory-company-created'],
    (event) => {
      console.log('inventory-company-created', 'event', event);
    },
  );

  useEventSourceListener(eventSource, ['inventory-item-created'], (event) => {
    console.log('inventory-item-created', 'event', event);
  });

  useEventSourceListener(
    eventSource,
    ['inventory-location-created'],
    (event) => {
      console.log('inventory-location-created', 'event', event);
    },
  );

  useEventSourceListener(eventSource, ['inventory-size-created'], (event) => {
    console.log('inventory-size-created', 'event', event);
  });

  useEventSourceListener(eventSource, ['inventory-type-created'], (event) => {
    console.log('inventory-type-created', 'event', event);
  });

  useEffect(() => {
    console.log('eventSourceStatus', eventSourceStatus);
  }, [eventSourceStatus]);

  return null;
}

export default memo(SSE);
