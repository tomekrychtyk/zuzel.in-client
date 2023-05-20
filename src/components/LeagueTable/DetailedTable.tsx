import { FC } from 'react';
import {
  useTheme,
  styled,
  Typography,
  Card,
  Box,
  Divider,
  Avatar,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead
} from '@mui/material';
import { IStandingsItem } from '@/features/polish-extra-league/interfaces';

const LOGOS_BUCKET_URL = 'https://s3.eu-central-1.amazonaws.com/zuzel.in/logos';

type Props = {
  data: IStandingsItem[];
  title: string;
  subtitle: string;
};

const TableWrapper = styled(Table)(
  () => `
    .MuiTableCell-root {
        border-bottom: 0;
    }
  `
);

const StyledRow = styled(TableRow)(({ theme }) => {
  return {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.colors.alpha.trueWhite[10]
    },
    '&:nth-of-type(even)': {}
  };
});

const LeagueTable: FC<Props> = ({ data, title, subtitle }) => {
  const theme = useTheme();
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    return a.place > b.place ? 1 : -1;
  });

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
          p={2}
        >
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            {title}
          </Typography>
          <Typography variant="h4">{subtitle}</Typography>
        </Box>
        <Divider />
        <TableContainer sx={{ pt: 1 }}>
          <TableWrapper>
            <TableHead sx={{ background: '#252525' }}>
              <TableRow>
                <TableCell sx={{ background: '#252525' }}></TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.alpha.trueWhite}>
                    M
                  </Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.alpha.trueWhite}>
                    PKT
                  </Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.alpha.trueWhite}>
                    +/-
                  </Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.success.main}>W</Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color="lightgray">R</Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.primary.main}>P</Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.info.dark}>B</Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.success.main}>WD</Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.success.main}>WW</Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.primary.main}>PD</Typography>
                </TableCell>
                <TableCell sx={{ background: '#252525' }} align="center">
                  <Typography color={theme.colors.primary.main}>PW</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map(
                ({
                  name,
                  points,
                  logo,
                  matches,
                  smallPoints,
                  wins,
                  draws,
                  loses,
                  homeWins,
                  homeLoses,
                  awayWins,
                  awayLoses,
                  bonuses
                }) => {
                  return (
                    <StyledRow hover key={name}>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar
                            sx={{
                              color: `${theme.colors.error.main}`,
                              width: 40,
                              height: 40
                            }}
                            src={`${LOGOS_BUCKET_URL}/${logo}`}
                          />
                          <Box ml={1.5}>
                            <Typography
                              color="text.primary"
                              variant="h5"
                              noWrap
                              sx={{ fontSize: '14px' }}
                            >
                              {name}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h5">{matches}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h4">{points}</Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Typography variant="h5">{smallPoints}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h5"
                          color={theme.colors.success.main}
                        >
                          {wins}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h5"
                          color={theme.colors.secondary.main}
                        >
                          {draws}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h5"
                          color={theme.colors.primary.main}
                        >
                          {loses}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h5" color="lightskyblue">
                          {bonuses}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h5"
                          color={theme.colors.success.main}
                        >
                          {homeWins}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h5"
                          color={theme.colors.success.main}
                        >
                          {awayWins}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h5"
                          color={theme.colors.primary.main}
                        >
                          {homeLoses}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h5"
                          color={theme.colors.primary.main}
                        >
                          {awayLoses}
                        </Typography>
                      </TableCell>
                    </StyledRow>
                  );
                }
              )}
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default LeagueTable;
