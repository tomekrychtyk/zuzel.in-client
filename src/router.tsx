import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import Layout from '@/components/Layout/Layout';

const PolishExtraLeagueStandings = lazy(
  () => import('./features/polish-extra-league/Standings')
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
