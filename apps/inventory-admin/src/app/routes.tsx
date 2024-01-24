import { createHashRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

const LazyLoginPage = lazy(() =>
  import('./pages/login.page').then((m) => ({ default: m.LoginPage }))
);
const LazyDashboardPage = lazy(() =>
  import('./dashboard/page').then((m) => ({
    default: m.DashboardPage,
  }))
);
const LazyErrorPage = lazy(() =>
  import('./pages/error.page').then((m) => ({ default: m.ErrorPage }))
);
const LazyCategoryPage = lazy(() =>
  import('./category/page').then((m) => ({ default: m.CategoryPage }))
);
const LazyBrandPage = lazy(() =>
  import('./brands/page').then((m) => ({ default: m.BrandPage }))
);
const LazyProductPage = lazy(() =>
  import('./products/page').then((m) => ({ default: m.ProductPage }))
);
const LazyLocationPage = lazy(() =>
  import('./locations/page').then((m) => ({ default: m.LocationPage }))
);
const LazyAuthenticatedLayout = lazy(
  () => import('./layout/authenticated.layout')
);
const LazyGuestLayout = lazy(() => import('./layout/guest.layout'));

interface Props {
  isAuthenticated: boolean;
}

const authenticatedRoutes = [
  {
    path: '/',
    element: (
      <LazyAuthenticatedLayout>
        <LazyDashboardPage />
      </LazyAuthenticatedLayout>
    ),
    errorElement: (
      <LazyAuthenticatedLayout>
        <LazyErrorPage />
      </LazyAuthenticatedLayout>
    ),
    hasErrorBoundary: true,
  },
  {
    path: '/categories',
    element: (
      <LazyAuthenticatedLayout>
        <LazyCategoryPage />
      </LazyAuthenticatedLayout>
    ),
    errorElement: (
      <LazyAuthenticatedLayout>
        <LazyErrorPage />
      </LazyAuthenticatedLayout>
    ),
    hasErrorBoundary: true,
  },
  {
    path: '/brands',
    element: (
      <LazyAuthenticatedLayout>
        <LazyBrandPage />
      </LazyAuthenticatedLayout>
    ),
    errorElement: (
      <LazyAuthenticatedLayout>
        <LazyErrorPage />
      </LazyAuthenticatedLayout>
    ),
    hasErrorBoundary: true,
  },
  {
    path: '/products',
    element: (
      <LazyAuthenticatedLayout>
        <LazyProductPage />
      </LazyAuthenticatedLayout>
    ),
    errorElement: (
      <LazyAuthenticatedLayout>
        <LazyErrorPage />
      </LazyAuthenticatedLayout>
    ),
    hasErrorBoundary: true,
  },
  {
    path: '/locations',
    element: (
      <LazyAuthenticatedLayout>
        <LazyLocationPage />
      </LazyAuthenticatedLayout>
    ),
    errorElement: (
      <LazyAuthenticatedLayout>
        <LazyErrorPage />
      </LazyAuthenticatedLayout>
    ),
    hasErrorBoundary: true,
  },
  {
    path: '*',
    element: (
      <LazyAuthenticatedLayout>
        <LazyErrorPage />
      </LazyAuthenticatedLayout>
    ),
    hasErrorBoundary: true,
  },
];
const guestRoutes = [
  {
    path: '*',
    element: (
      <LazyGuestLayout>
        <LazyLoginPage />
      </LazyGuestLayout>
    ),
    hasErrorBoundary: true,
  },
];

export function Routes(props: Props) {
  const router = createHashRouter(
    props.isAuthenticated ? authenticatedRoutes : guestRoutes
  );

  return <RouterProvider router={router} />;
}
