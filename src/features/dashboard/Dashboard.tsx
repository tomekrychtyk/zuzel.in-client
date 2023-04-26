import { Grid } from '@mui/material';
import ExtraLeague from './ExtraLeague';
import FirstLeague from './FirstLeague';
import SecondLeague from './SecondLeague';

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
        <FirstLeague />
        <SecondLeague />
      </Grid>
    </Grid>
  );
}
