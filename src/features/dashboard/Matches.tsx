import { Fragment, FC } from 'react';
import {
  Card,
  Typography,
  Box,
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Button,
  useTheme
} from '@mui/material';
import Label from '@/components/Label/Label';

const LOGOS_BUCKET_URL = 'https://s3.eu-central-1.amazonaws.com/zuzel.in/logos';

interface MatchData {
  id: number;
  home: string;
  away: string;
  result?: string;
  homeLogo?: string;
  awayLogo?: string;
  live?: boolean;
}

interface MatchesData {
  date: string;
  matches: MatchData[];
}

type Props = {
  data: MatchesData[];
};

const Matches: FC<Props> = ({ data }) => {
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
          <Typography variant="h4">Ostatnie mecze</Typography>
        </Box>
        <Divider />
        <List disablePadding>
          {data.map((matchDay) => {
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
                          position: 'relative',
                          py: 2,
                          display: 'flex',
                          justifyContent: 'space-between',
                          background: match.live
                            ? `${theme.colors.gradients.black2}`
                            : ''
                        }}
                      >
                        {match.live ? (
                          <Label centeredAbsolute color="warning">
                            LIVE
                          </Label>
                        ) : null}
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
                              sx={{ textAlign: 'center', mt: 2 }}
                            >
                              {match.result}
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
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Button variant="outlined">Pokaż więcej</Button>
      </Box>
    </Card>
  );
};

export default Matches;
