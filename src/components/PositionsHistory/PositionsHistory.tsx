import React, { useRef, FC } from 'react';
import {
  CardHeader,
  Divider,
  CardContent,
  Button,
  Menu,
  MenuItem,
  Box
} from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { IPositionsHistory, ITeam } from '@/interfaces';

type Props = {
  positionsChartsConfig: ApexOptions;
  positionsHistoryData: IPositionsHistory;
  onStateChange: React.Dispatch<{
    type: string;
    payload: {
      teamOpen?: boolean;
      teamName?: string;
      currentSeries?: number[];
    };
  }>;
  state: {
    openTeamSelect: boolean;
    currentTeam: string;
    currentTeamsSeries: number[];
    teams: ITeam[];
  };
};

const PotitionsHistory: FC<Props> = ({
  positionsChartsConfig,
  positionsHistoryData,
  onStateChange,
  state
}) => {
  const teamFormSelectRef = useRef<any>(null);

  return (
    <>
      <CardHeader title="Historia pozycji w tabeli" />
      <Divider />
      <CardContent>
        <Button
          size="small"
          variant="outlined"
          ref={teamFormSelectRef}
          onClick={() =>
            onStateChange({
              type: 'setOpenTeamSelect',
              payload: {
                teamOpen: true
              }
            })
          }
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {state.currentTeam}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={teamFormSelectRef.current}
          onClose={() => {
            onStateChange({
              type: 'setOpenTeamSelect',
              payload: {
                teamOpen: false
              }
            });
          }}
          open={state.openTeamSelect}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          {state.teams.map((team) => (
            <MenuItem
              key={team.name}
              onClick={() => {
                onStateChange({
                  type: 'teamSelect',
                  payload: {
                    teamName: team.name,
                    currentSeries: positionsHistoryData[team.name]
                  }
                });
              }}
            >
              {team.name}
            </MenuItem>
          ))}
        </Menu>
        <Box sx={{ mt: 2 }}>
          <Chart
            options={positionsChartsConfig}
            series={[
              {
                name: 'Miejsce',
                data: state.currentTeamsSeries
              }
            ]}
            type="line"
            height={230}
          />
        </Box>
      </CardContent>
    </>
  );
};

export default PotitionsHistory;
