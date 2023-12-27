import { memo } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Auth from './auth';

const router = createHashRouter([
  {
    path: '/',
    element: <Auth key="Authentication" />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default memo(Routes);
