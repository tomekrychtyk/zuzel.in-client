import { Grid, SxProps } from '@mui/material';
import LeagueTable from '../LeagueTable';
import Matches from '../Matches';
import lastMatches from './data/last-matches';
import nextMatches from './data/next-matches';
import table from './data/table';

type Props = {
  sx?: SxProps;
};

export default function LeagueOne(props: Props) {
  return (
    <Grid container spacing={4} sx={props.sx}>
      <Grid item md={4} xs={12}>
        <Matches data={lastMatches} />
      </Grid>
      <Grid item md={4} xs={12}>
        <Matches data={nextMatches} />
      </Grid>
      <Grid item md={4} xs={12}>
        <LeagueTable data={table} />
      </Grid>
    </Grid>
  );
}
