import { useState } from 'react';
import { Card, CardHeader, Divider, Grid, useTheme } from '@mui/material';
import Table from '@/components/LeagueTable/DetailedTable';
import TableLegend from '@/components/LeagueTable/Legend';
import SuspenseLoader from '@/components/SuspenseLoader/SuspenseLoader';
import PositionsHistory from '@/components/PositionsHistory/PositionsHistory';
import { getPositionChartConfig } from '@/components/LeagueTable/position-chart-config';
import useStandings from '@/hooks/useStandings';
import {
  useGetStandingsQuery,
  useGetPositionsHistoryQuery
} from './polishExtraLeagueApi';

export default function Standings() {
  const theme = useTheme();
  const positionsChartsConfig = getPositionChartConfig(theme);
  const [openTeamSelect, setOpenTeamSelect] = useState<boolean>(false);
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
  const {
    teams,
    currentTeam,
    setCurrentTeam,
    currentSeries,
    setCurrentSeries
  } = useStandings(positionsHistoryData, standingsData);

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
                subtitle="eWinner 1. Liga"
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
                  currentTeam={currentTeam}
                  currentSeries={currentSeries}
                  onTeamSelect={setCurrentTeam}
                  onCurrentSeriesSelect={setCurrentSeries}
                  onMenuItemSelect={setOpenTeamSelect}
                  onOpenTeamSelect={setOpenTeamSelect}
                  positionsChartsConfig={positionsChartsConfig}
                  teams={teams}
                  openTeamSelect={openTeamSelect}
                  positionsHistoryData={positionsHistoryData}
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
