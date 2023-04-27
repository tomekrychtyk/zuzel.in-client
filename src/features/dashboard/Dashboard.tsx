import { Grid } from '@mui/material';
import ExtraLeague from './ExtraLeague/ExtraLeague';
import LeagueOne from './LeagueOne/LeagueOne';
import LeagueTwo from './LeagueTwo/LeagueTwo';

export default function Dashboard() {
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
        <ExtraLeague />
        <LeagueOne sx={{ pt: '32px' }} />
        <LeagueTwo sx={{ pt: '32px' }} />
      </Grid>
    </Grid>
  );
}
