import {
  Card,
  Typography,
  Box,
  List,
  ListSubheader,
  ListItem,
  useTheme
} from '@mui/material';

export default function LastMatches() {
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
      <List disablePadding>
        <ListSubheader
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>27 kwietnia 2023</Box>
        </ListSubheader>
        <ListItem
          sx={{
            py: 2
          }}
        >
          Krosno - Toruń
        </ListItem>
      </List>
      <List disablePadding>
        <ListSubheader
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>28 kwietnia 2023</Box>
        </ListSubheader>
        <ListItem
          sx={{
            py: 2
          }}
        >
          Leszno - Toruń
        </ListItem>
        <ListItem
          sx={{
            py: 2
          }}
        >
          Gorzów - Lublin
        </ListItem>
      </List>
    </Card>
  );
}
