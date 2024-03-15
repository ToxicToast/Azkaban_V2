import { memo, useEffect } from 'react';

function SSE() {
  useEffect(() => {
    const eventSource = new EventSource(
      'https://api.toxictoast.de/sse/notification',
    );

    eventSource.onmessage = (event) => {
      console.log('event', event);
    };

    eventSource.onerror = (error) => {
      console.error('error', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return null;
}

export default memo(SSE);
