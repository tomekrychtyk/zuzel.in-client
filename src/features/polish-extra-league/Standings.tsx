import { useRef, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Table from '@/components/LeagueTable/DetailedTable';
import tableData from './standings-data';

export default function Standings() {
  const theme = useTheme();
  const teamFormSelectRef = useRef<any>(null);
  const [openTeamSelect, setOpenTeamSelect] = useState<boolean>(false);

  return (
    <Grid
      sx={{
        px: 4,
        py: 4,
      }}
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={4}
    >
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item lg={1} sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}></Grid>
          <Grid item md={12} lg={10}>
            <Table
              data={tableData}
              title="ostatnia aktualizacja: 19.05.2023"
              subtitle="PGE Ekstraliga"
            />
          </Grid>
          <Grid item lg={1} sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}></Grid>

          <Grid item lg={1} sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}></Grid>
          <Grid item md={12} lg={10}>
            <Typography
              component="span"
              color={theme.colors.alpha.trueWhite}
              sx={{ fontWeight: 700 }}
            >
              M - Ilość meczów
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.alpha.trueWhite}
            >
              PKT: Punkty
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.success.main}
            >
              W: Wygrane
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.secondary.main}
            >
              R: Remisy
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.primary.main}
            >
              P: Przegrane
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.info.dark}
            >
              B: Bonusy
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.success.main}
            >
              W: Wygrane dom
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.success.main}
            >
              WW: Wygrane wyjazd
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.primary.main}
            >
              PD: Przegrane dom
            </Typography>
            <Typography
              component="span"
              sx={{ pl: 2, fontWeight: 700 }}
              color={theme.colors.primary.main}
            >
              PW: Przegrane wyjazd
            </Typography>
          </Grid>
          <Grid item lg={1} sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}></Grid>

          <Grid item lg={1} sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}></Grid>
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
                  Betard Sparta Wrocław
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={1} sx={{ display: { md: 'none', lg: 'block', xs: 'none' } }}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
