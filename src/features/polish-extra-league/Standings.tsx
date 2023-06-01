import { useState, useEffect, useReducer } from 'react';
import { Card, CardHeader, Divider, Grid, useTheme } from '@mui/material';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import Table from '@/components/LeagueTable/DetailedTable';
import TableLegend from '@/components/LeagueTable/Legend';
import SuspenseLoader from '@/components/SuspenseLoader/SuspenseLoader';
import PositionsHistory from '@/components/PositionsHistory/PositionsHistory';
import { getPositionChartConfig } from '@/components/LeagueTable/position-chart-config';
import { ITeam } from '@/interfaces';
import {
  useGetStandingsQuery,
  useGetPositionsHistoryQuery
} from './polishExtraLeagueApi';
import { standingsReducer } from './standings-reducer';

export default function Standings() {
  const theme = useTheme();
  const [state, dispatch] = useReducer(standingsReducer, {
    openTeamSelect: false,
    currentTeam: '',
    currentTeamsSeries: [],
    teams: []
  });

  const positionsChartsConfig = getPositionChartConfig(theme);
  const {
    data: standingsData,
    isLoading: standingsLoading,
    isError: standingsError
  } = useGetStandingsQuery();
  const {
    data: positionsHistoryData,
    isLoading: positionsHistoryLoading,
    isError: positionsHistoryError
  } = useGetPositionsHistoryQuery();

  useEffect(() => {
    if (positionsHistoryData) {
      const teamsData = Object.keys(positionsHistoryData).map((team) => {
        return { name: team };
      });
      dispatch({
        type: 'setInitialChartData',
        payload: {
          currentSeries: positionsHistoryData['Tauron Włókniarz Częstochowa'],
          teamName: teamsData[0].name,
          teams: teamsData
        }
      });
    }
  }, [positionsHistoryData]);

  if (standingsLoading || positionsHistoryLoading) {
    return <SuspenseLoader />;
  }

  return (
    <Grid
      sx={{
        px: 4,
        py: 4
      }}
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={4}
    >
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid
            item
            lg={1}
            sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}
          ></Grid>
          <Grid item md={12} lg={10}>
            {standingsError || !standingsData ? (
              <Card sx={{ mt: 4 }}>
                <CardHeader title="Błąd ładowania danych" />
              </Card>
            ) : (
              <Table
                data={standingsData}
                title="ostatnia aktualizacja: 23.05.2023"
                subtitle="PGE Ekstraliga"
              />
            )}
          </Grid>
          <Grid
            item
            lg={1}
            sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}
          ></Grid>

          <Grid
            item
            lg={1}
            sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}
          ></Grid>
          <Grid item md={12} lg={10}>
            {standingsError || !standingsData ? null : <TableLegend />}
          </Grid>
          <Grid
            item
            lg={1}
            sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}
          ></Grid>

          <Grid
            item
            lg={1}
            sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}
          ></Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            {positionsHistoryError || !positionsHistoryData ? (
              <Card sx={{ mt: 4 }}>
                <CardHeader title="Błąd ładowania danych" />
              </Card>
            ) : (
              <Card sx={{ mt: 4 }}>
                <PositionsHistory
                  positionsChartsConfig={positionsChartsConfig}
                  positionsHistoryData={positionsHistoryData}
                  onStateChange={dispatch}
                  state={state}
                />
                <Divider />
              </Card>
            )}
          </Grid>
          <Grid
            item
            lg={1}
            sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
