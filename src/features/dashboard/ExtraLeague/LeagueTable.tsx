import { Fragment } from 'react';
import {
  useTheme,
  styled,
  Typography,
  Card,
  Box,
  Divider,
  Avatar,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import table from './data/table';

const LOGOS_BUCKET_URL = 'https://s3.eu-central-1.amazonaws.com/zuzel.in/logos';

const TableHeadWrapper = styled(TableHead)(
  ({ theme }) => `
      .MuiTableCell-root {
          text-transform: none;
          font-size: ${theme.typography.pxToRem(14)};
          padding-top: 0;
          padding-bottom: ${theme.spacing(1)};
          color: ${theme.colors.alpha.black[100]};
      }

      .MuiTableRow-root {
          background: transparent;
      }
  `
);

const TableWrapper = styled(Table)(
  () => `
    .MuiTableCell-root {
        border-bottom: 0;
    }
  `
);

export default function LeagueTable() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
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
          PGE Ekstraliga
        </Typography>
        <Typography variant="h4">Ostatnie mecze</Typography>
      </Box>
      <Divider />
      <TableContainer sx={{ pt: 1 }}>
        <TableWrapper>
          <TableHeadWrapper>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>M</TableCell>
            <TableCell>P</TableCell>
          </TableHeadWrapper>
          <TableBody>
            {table.map(({ place, name, matches, points, logo }) => {
              return (
                <TableRow hover>
                  <TableCell align="right">{place}</TableCell>
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
                          sx={{ fontSize: '12px' }}
                        >
                          {name}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h5">{matches}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h5">{points}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableWrapper>
      </TableContainer>
    </Card>
  );
}
