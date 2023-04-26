import { Grid } from '@mui/material';
import LastMatches from './LastMatches';
import NextMatches from './NextMatches';
import LeagueTable from './LeagueTable';

export default function ExtraLeague() {
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12}>
        <LastMatches />
      </Grid>
      <Grid item md={4} xs={12}>
        <NextMatches />
      </Grid>
      <Grid item md={4} xs={12}>
        <LeagueTable />
      </Grid>
    </Grid>
  );
}
