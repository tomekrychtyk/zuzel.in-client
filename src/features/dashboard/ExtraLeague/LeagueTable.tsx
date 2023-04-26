import { Typography, Card, Box, useTheme } from '@mui/material';

export default function LeagueTable() {
  const theme = useTheme();
  return (
    <Card sx={{ height: '100%' }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
        p={2}
      >
        <Box>
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
      </Box>
    </Card>
  );
}
