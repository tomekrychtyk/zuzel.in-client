import { Typography, useTheme } from '@mui/material';

export default function Legend() {
  const theme = useTheme();

  return (
    <>
      <Typography component="span" color={theme.colors.alpha.trueWhite} sx={{ fontWeight: 700 }}>
        M - Ilość meczów
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.alpha.trueWhite}
      >
        PKT: Punkty
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.success.main}
      >
        W: Wygrane
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.secondary.main}
      >
        R: Remisy
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.primary.main}
      >
        P: Przegrane
      </Typography>
      <Typography component="span" sx={{ pl: 2, fontWeight: 700 }} color={theme.colors.info.dark}>
        B: Bonusy
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.success.main}
      >
        W: Wygrane dom
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.success.main}
      >
        WW: Wygrane wyjazd
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.primary.main}
      >
        PD: Przegrane dom
      </Typography>
      <Typography
        component="span"
        sx={{ pl: 2, fontWeight: 700 }}
        color={theme.colors.primary.main}
      >
        PW: Przegrane wyjazd
      </Typography>
    </>
  );
}
