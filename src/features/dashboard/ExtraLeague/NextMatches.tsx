import { Fragment } from 'react';
import {
  List,
  ListItem,
  ListSubheader,
  Box,
  Typography,
  Card,
  ListItemText,
  Divider,
  Avatar,
  ListItemAvatar,
  useTheme
} from '@mui/material';
import nextMatches from './data/next-matches';

const LOGOS_BUCKET_URL = 'https://s3.eu-central-1.amazonaws.com/zuzel.in/logos';

export default function NextMatches() {
  const theme = useTheme();
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
          <Typography variant="h4">Nadchodzące mecze</Typography>
        </Box>
        <Divider />
        <List disablePadding>
          {nextMatches.map((matchDay) => {
            return (
              <Fragment key={matchDay.date}>
                <ListSubheader
                  color="primary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {matchDay.date}
                </ListSubheader>
                <Divider />
                {matchDay.matches.map((match) => {
                  return (
                    <Fragment key={match.id}>
                      <ListItem
                        sx={{
                          py: 2,
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <ListItemAvatar
                          sx={{
                            minWidth: 'auto',
                            mr: 2,
                            mb: { xs: 2, sm: 0 }
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 42,
                              height: 42
                            }}
                            alt="Krosno"
                            src={`${LOGOS_BUCKET_URL}/${match.homeLogo}`}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            flexGrow: 0,
                            maxWidth: '50%',
                            flexBasis: '50%'
                          }}
                          disableTypography
                          primary={
                            <Typography color="text.primary" variant="h5">
                              {match.home}
                            </Typography>
                          }
                        />
                        <ListItemText
                          sx={{
                            flexGrow: 0,
                            maxWidth: '50%',
                            flexBasis: '50%'
                          }}
                          disableTypography
                          primary={
                            <Typography
                              color="text.primary"
                              variant="h5"
                              sx={{ textAlign: 'center' }}
                            >
                              - : -
                            </Typography>
                          }
                        />
                        <ListItemText
                          sx={{
                            flexGrow: 0,
                            maxWidth: '50%',
                            flexBasis: '50%'
                          }}
                          disableTypography
                          primary={
                            <Typography
                              color="text.primary"
                              variant="h5"
                              sx={{ textAlign: 'right' }}
                            >
                              {match.away}
                            </Typography>
                          }
                        />
                        <ListItemAvatar
                          sx={{
                            minWidth: 'auto',
                            ml: 2,
                            mb: { xs: 2, sm: 0 }
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 42,
                              height: 42
                            }}
                            alt={match.away}
                            src={`${LOGOS_BUCKET_URL}/${match.awayLogo}`}
                          />
                        </ListItemAvatar>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}
        </List>
      </Box>
      <Box>dsfsdf</Box>
    </Card>
  );
}
