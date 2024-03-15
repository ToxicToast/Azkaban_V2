import { memo, useEffect } from 'react';

function SSE() {
  useEffect(() => {
    const eventSource = new EventSource(process.env.NX_SSE_URL ?? '');

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
