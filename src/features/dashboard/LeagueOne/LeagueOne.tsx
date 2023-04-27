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
        <Matches
          title="E-winner 1. liga"
          subtitle="Ostatnie mecze"
          data={lastMatches}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <Matches
          title="E-winner 1. liga"
          subtitle="Nadchodzące mecze"
          data={nextMatches}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <LeagueTable title="E-Winner 1. liga" subtitle="Tabela" data={table} />
      </Grid>
    </Grid>
  );
}
