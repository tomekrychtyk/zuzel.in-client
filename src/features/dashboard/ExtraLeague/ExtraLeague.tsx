import { Grid } from '@mui/material';
import LeagueTable from '../LeagueTable';
import Matches from '../Matches';
import lastMatches from './data/last-matches';
import nextMatches from './data/next-matches';
import table from './data/table';

export default function ExtraLeague() {
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12}>
        <Matches
          data={lastMatches}
          title="PGE Ekstraliga"
          subtitle="Ostatnie mecze"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <Matches
          data={nextMatches}
          title="PGE Ekstraliga"
          subtitle="Nadchodzące mecze"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <LeagueTable title="PGE Ekstraliga" subtitle="Tabela" data={table} />
      </Grid>
    </Grid>
  );
}
