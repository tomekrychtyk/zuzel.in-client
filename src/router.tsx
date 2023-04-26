import { Suspense, lazy, FC, ComponentProps } from 'react';
import { RouteObject } from 'react-router';
import Layout from '@/components/Layout/Layout';
import SuspenseLoader from '@/components/SuspenseLoader/SuspenseLoader';

const Loader = (Component: FC) => (props: ComponentProps<FC>) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Dashboard = Loader(lazy(() => import('./features/dashboard/Dashboard')));
const PolishExtraLeagueStandings = Loader(
  lazy(() => import('./features/polish-extra-league/Standings'))
);
const PolistExtraLeagueFixtures = Loader(
  lazy(() => import('./features/polish-extra-league/Fixtures'))
);

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/polish-extra-league/standings',
        element: <PolishExtraLeagueStandings />
      },
      {
        path: '/polish-extra-league/fixtures',
        element: <PolistExtraLeagueFixtures />
      }
    ]
  }
];

export default router;
