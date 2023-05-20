import { apiSlice } from '@/app/api';
import { IStandingsItem, IPositionsHistory } from './interfaces';

export const polishExtraLeagueApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStandings: builder.query<IStandingsItem[], void>({
      query: () => ({
        url: 'standings',
        params: {
          league: 1
        }
      })
    }),

    getPositionsHistory: builder.query<IPositionsHistory, void>({
      query: () => ({
        url: 'positions-history',
        params: {
          league: 1
        }
      })
    })
  })
});

export const { useGetStandingsQuery, useGetPositionsHistoryQuery } =
  polishExtraLeagueApi;
