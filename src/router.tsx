import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import Layout from '@/components/Layout/Layout';
import SuspenseLoader from '@/components/SuspenseLoader/SuspenseLoader';

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const PolishExtraLeagueStandings = Loader(
  lazy(() => import('./features/polish-extra-league/Standings'))
);

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/polish-extra-league/standings',
        element: <PolishExtraLeagueStandings />
      }
    ]
  }
];

export default router;
