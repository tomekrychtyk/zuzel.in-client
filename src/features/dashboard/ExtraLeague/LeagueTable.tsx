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
  Button
} from '@mui/material';
import table from './data/table';

const LOGOS_BUCKET_URL = 'https://s3.eu-central-1.amazonaws.com/zuzel.in/logos';

const TableWrapper = styled(Table)(
  () => `
    .MuiTableCell-root {
        border-bottom: 0;
    }
  `
);

export default function LeagueTable() {
  const theme = useTheme();
  table.sort((a, b) => {
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
            PGE Ekstraliga
          </Typography>
          <Typography variant="h4">Tabela</Typography>
        </Box>
        <Divider />
        <TableContainer sx={{ pt: 1 }}>
          <TableWrapper>
            <TableBody>
              {table.map(({ name, points, logo }) => {
                return (
                  <TableRow hover key={name}>
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
                    <TableCell align="right" sx={{ pr: 2 }}>
                      <Typography variant="h5">{points}</Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Button variant="outlined">Szczegółowa tabela</Button>
      </Box>
    </Card>
  );
}
