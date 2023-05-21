import { useRef, useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  Divider,
  Grid,
  Typography,
  useTheme,
  styled
} from '@mui/material';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import Table from '@/components/LeagueTable/DetailedTable';
import TableLegend from '@/components/LeagueTable/Legend';
import SuspenseLoader from '@/components/SuspenseLoader/SuspenseLoader';
import PositionsHistory from '@/components/PositionsHistory/PositionsHistory';
import { getPositionChartConfig } from '@/components/LeagueTable/position-chart-config';
import {
  useGetStandingsQuery,
  useGetPositionsHistoryQuery
} from './polishExtraLeagueApi';
import { teams } from './teams-data';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: 0;
      display: block;
`
);

export default function Standings() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [openTeamSelect, setOpenTeamSelect] = useState<boolean>(false);
  const [currentTeam, setCurrentTeam] = useState('Betard Sparta Wrocław');
  const [currentSeries, setCurrentSeries] = useState<number[]>([]);

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
      setCurrentSeries(positionsHistoryData['wroclaw']);
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
                title="ostatnia aktualizacja: 19.05.2023"
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

                <CardActionsWrapper>
                  <Box>
                    <Grid container alignItems="center">
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        item
                        sx={{
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: { xs: 'none', sm: 'inline-block' }
                          }}
                        >
                          <Divider orientation="vertical" flexItem absolute />
                        </Box>
                        <Box
                          sx={{
                            p: 3
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle2" gutterBottom>
                              heading 1
                            </Typography>
                            <Typography variant="h3">heading 2</Typography>
                          </Box>
                          wykres
                        </Box>
                        <Divider />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        item
                        sx={{
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: { xs: 'none', sm: 'inline-block' }
                          }}
                        >
                          <Divider orientation="vertical" flexItem absolute />
                        </Box>
                        <Box
                          sx={{
                            p: 3
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle2" gutterBottom>
                              h1
                            </Typography>
                            <Typography variant="h3">h2</Typography>
                          </Box>
                          wykres
                        </Box>
                        <Divider />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        item
                        sx={{
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: { xs: 'none', sm: 'inline-block' }
                          }}
                        >
                          <Divider orientation="vertical" flexItem absolute />
                        </Box>
                        <Box
                          sx={{
                            p: 3
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle2" gutterBottom>
                              h1
                            </Typography>
                            <Typography variant="h3">h2</Typography>
                          </Box>
                          chart
                        </Box>
                        <Divider />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        item
                        sx={{
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: { xs: 'none', sm: 'inline-block' }
                          }}
                        >
                          <Divider orientation="vertical" flexItem absolute />
                        </Box>
                        <Box
                          sx={{
                            p: 3
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle2" gutterBottom>
                              h1
                            </Typography>
                            <Typography variant="h3">h2</Typography>
                          </Box>
                          wykres
                        </Box>
                        <Divider />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        item
                        sx={{
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: { xs: 'none', sm: 'inline-block' }
                          }}
                        >
                          <Divider orientation="vertical" flexItem absolute />
                        </Box>
                        <Box
                          sx={{
                            p: 3
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle2" gutterBottom>
                              h1
                            </Typography>
                            <Typography variant="h3">h2</Typography>
                          </Box>
                          wykres
                        </Box>
                        <Divider />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        item
                        sx={{
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: { xs: 'none', sm: 'inline-block' }
                          }}
                        >
                          <Divider orientation="vertical" flexItem absolute />
                        </Box>
                        <Box
                          sx={{
                            p: 3
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle2" gutterBottom>
                              sesje
                            </Typography>
                            <Typography variant="h3">sesje 2</Typography>
                          </Box>
                          wykres
                        </Box>
                        <Divider />
                      </Grid>
                    </Grid>
                  </Box>
                </CardActionsWrapper>
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
