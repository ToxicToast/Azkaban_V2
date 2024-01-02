import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { useMemo } from 'react';
import { LoginPage } from './pages/login.page';
import { Optional } from '@azkaban/shared';
import { User } from 'oidc-client-ts';
import { DashboardPage } from './pages/dashboard.page';

interface Props {
  isAuthenticated: boolean;
  user?: Optional<User>;
}

export function Routes(props: Props) {
  const getRoutes = useMemo((): Array<RouteObject> => {
    if (props.isAuthenticated) {
      return [
        {
          path: '/',
          element: <DashboardPage user={props.user ?? null} />,
        },
      ];
    }
    return [
      {
        path: '/',
        element: <LoginPage />,
      },
    ];
  }, [props.isAuthenticated, props.user]);
  const router = createHashRouter(getRoutes);

  return <RouterProvider router={router} />;
}
