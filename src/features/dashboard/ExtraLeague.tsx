import {
  Box,
  Grid,
  Typography,
  Card,
  List,
  ListSubheader,
  ListItem,
  useTheme
} from '@mui/material';

export default function ExtraLeague() {
  const theme = useTheme();
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
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
                <Typography variant="h4">Nadchodzące mecze</Typography>
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Card>
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
                  <Typography variant="h4">Ostatnie mecze</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Card>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
