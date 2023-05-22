import { apiSlice } from '@/app/api';
import { IStandingsItem, IPositionsHistory } from '@/interfaces';

export const polishFirstLeagueApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFirstLeagueStandings: builder.query<IStandingsItem[], void>({
      query: () => ({
        url: 'standings',
        params: {
          league: 2
        }
      })
    }),

    getFirstLeaguePositionsHistory: builder.query<IPositionsHistory, void>({
      query: () => ({
        url: 'positions-history',
        params: {
          league: 2
        }
      })
    })
  })
});

export const {
  useGetFirstLeagueStandingsQuery,
  useGetFirstLeaguePositionsHistoryQuery
} = polishFirstLeagueApi;
