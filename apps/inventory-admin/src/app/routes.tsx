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
import AuthenticatedLayout from './layout/authenticated.layout';
import GuestLayout from './layout/guest.layout';
import { ErrorPage } from './pages/error.page';

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
          element: (
            <AuthenticatedLayout>
              <DashboardPage user={props.user ?? null} />
            </AuthenticatedLayout>
          ),
          errorElement: (
            <AuthenticatedLayout>
              <ErrorPage />
            </AuthenticatedLayout>
          ),
          hasErrorBoundary: true,
        },
        {
          path: '/categories',
          element: <AuthenticatedLayout>CATEGORY</AuthenticatedLayout>,
        },
      ];
    }
    return [
      {
        path: '/',
        element: (
          <GuestLayout>
            <LoginPage />
          </GuestLayout>
        ),
      },
    ];
  }, [props.isAuthenticated, props.user]);
  const router = createHashRouter(getRoutes);

  return <RouterProvider router={router} />;
}
