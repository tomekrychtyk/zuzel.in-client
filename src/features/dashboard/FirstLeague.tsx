import { Box, Grid, Typography, Card, useTheme } from '@mui/material';

export default function FirstLeague() {
  const theme = useTheme();
  return (
    <Grid container spacing={4} sx={{ pt: '32px' }}>
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
                    E-Winner 1 liga
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
                    E-winner 1 liga
                  </Typography>
                  <Typography variant="h4">Nadchodzące mecze</Typography>
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
                    E-winner 1 liga
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
