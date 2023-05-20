import { useRef, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  styled
} from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Chart from 'react-apexcharts';

import Table from '@/components/LeagueTable/DetailedTable';
import Legend from '@/components/LeagueTable/Legend';
import { getPositionChartConfig } from '@/components/LeagueTable/position-chart-config';
import tableData from './standings-data';
import { seriesData } from './position-chart-data';
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
  const teamFormSelectRef = useRef<any>(null);
  const [openTeamSelect, setOpenTeamSelect] = useState<boolean>(false);
  const [currentTeam, setCurrentTeam] = useState('Betard Sparta Wrocław');
  const [currentSeries, setCurrentSeries] = useState(seriesData['wroclaw']);

  const ChartAudienceOptions = getPositionChartConfig(theme);

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
            <Table
              data={tableData}
              title="ostatnia aktualizacja: 19.05.2023"
              subtitle="PGE Ekstraliga"
            />
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
            <Legend />
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
            <Card sx={{ mt: 4 }}>
              <CardHeader title="Ogólne statystyki z sezonu" />
              <Divider />
              <CardContent>
                <Button
                  size="small"
                  variant="outlined"
                  ref={teamFormSelectRef}
                  onClick={() => setOpenTeamSelect(true)}
                  endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
                >
                  {currentTeam}
                </Button>
                <Menu
                  disableScrollLock
                  anchorEl={teamFormSelectRef.current}
                  onClose={() => setOpenTeamSelect(false)}
                  open={openTeamSelect}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                >
                  {teams.map((team) => (
                    <MenuItem
                      key={team.name}
                      onClick={() => {
                        setCurrentTeam(team.name);
                        setCurrentSeries(seriesData[team.id]);
                        setOpenTeamSelect(false);
                      }}
                    >
                      {team.name}
                    </MenuItem>
                  ))}
                </Menu>
                <Box sx={{ mt: 2 }}>
                  <Chart
                    options={ChartAudienceOptions}
                    series={[
                      {
                        name: 'Miejsce',
                        data: currentSeries
                      }
                    ]}
                    type="line"
                    height={230}
                  />
                </Box>
              </CardContent>
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
