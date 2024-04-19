import { createHashRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './routes.css';
import SSE from './sse';

const LazyLoginPage = lazy(() =>
  import('./pages/login.page').then((m) => ({ default: m.LoginPage })),
);
const LazyRegisterPage = lazy(() =>
  import('./pages/register.page').then((m) => ({ default: m.RegisterPage })),
);
const LazyDashboardPage = lazy(() =>
  import('./dashboard/page').then((m) => ({
    default: m.DashboardPage,
  })),
);
const LazyErrorPage = lazy(() =>
  import('./pages/error.page').then((m) => ({ default: m.ErrorPage })),
);
const LazyCategoryPage = lazy(() =>
  import('./category/page').then((m) => ({ default: m.CategoryPage })),
);
const LazyBrandPage = lazy(() =>
  import('./brands/page').then((m) => ({ default: m.BrandPage })),
);
const LazyLocationPage = lazy(() =>
  import('./locations/page').then((m) => ({ default: m.LocationsPage })),
);
const LazyAuthenticatedLayout = lazy(
  () => import('./layout/authenticated.layout'),
);
const LazyGuestLayout = lazy(() => import('./layout/guest.layout'));

interface Props {
  isAuthenticated: boolean;
}

const authenticatedRoutes = [
  {
    element: <LazyAuthenticatedLayout />,
    errorElement: <LazyErrorPage />,
    hasErrorBoundary: true,
    children: [
      {
        path: '/',
        element: <LazyDashboardPage />,
        hasErrorBoundary: true,
      },
      {
        path: '/categories',
        element: <LazyCategoryPage />,
        hasErrorBoundary: true,
      },
      {
        path: '/brands',
        element: <LazyBrandPage />,
        hasErrorBoundary: true,
      },
      {
        path: '/locations',
        element: <LazyLocationPage />,
        hasErrorBoundary: true,
      },
      {
        path: '*',
        element: <LazyErrorPage />,
        hasErrorBoundary: true,
      },
    ],
  },
];
const guestRoutes = [
  {
    element: <LazyGuestLayout />,
    errorElement: <LazyErrorPage />,
    hasErrorBoundary: true,
    children: [
      {
        path: '*',
        element: <LazyLoginPage />,
        hasErrorBoundary: true,
      },
      {
        path: '/register',
        element: <LazyRegisterPage />,
        hasErrorBoundary: true,
      },
    ],
  },
];

export function Routes(props: Props) {
  const router = createHashRouter(
    props.isAuthenticated ? authenticatedRoutes : guestRoutes,
  );

  return (
    <>
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade">
          <RouterProvider router={router} />
        </CSSTransition>
      </TransitionGroup>
      <SSE />
    </>
  );
}
