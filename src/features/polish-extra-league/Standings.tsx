import { useRef, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Menu,
  MenuItem,
  useTheme
} from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Chart from 'react-apexcharts';

import Table from '@/components/LeagueTable/DetailedTable';
import Legend from '@/components/LeagueTable/Legend';
import { getPositionChartConfig } from '@/components/LeagueTable/position-chart-config';
import tableData from './standings-data';

const teams = [
  {
    name: 'Betard Spart Wrocław'
  },
  {
    name: 'Fogo Unia Leszno'
  },
  {
    name: 'Ebut.pl Stal Gorzów'
  },
  {
    name: 'Cellfast Wilki Krosno'
  }
];

export default function Standings() {
  const theme = useTheme();
  const teamFormSelectRef = useRef<any>(null);
  const [openTeamSelect, setOpenTeamSelect] = useState<boolean>(false);
  const [currentTeam, setCurrentTeam] = useState('Betard Sparta Wrocław');

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
                        data: [
                          1,
                          2,
                          2,
                          4,
                          1,
                          6,
                          4,
                          1,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                        ]
                      }
                    ]}
                    type="line"
                    height={230}
                  />
                </Box>
              </CardContent>
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
