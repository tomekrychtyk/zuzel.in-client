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
  onMenuItemSelect: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenTeamSelect: React.Dispatch<React.SetStateAction<boolean>>;
  onCurrentSeriesSelect: React.Dispatch<React.SetStateAction<number[]>>;
  onTeamSelect: React.Dispatch<React.SetStateAction<string>>;
  positionsChartsConfig: ApexOptions;
  currentSeries: number[];
  positionsHistoryData: IPositionsHistory;
  teams: {
    name: string;
  }[];
  currentTeam: string;
  openTeamSelect: boolean;
  onStateChange: React.Dispatch<{
    type: string;
    payload: {
      teamOpen?: boolean;
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
  onMenuItemSelect,
  onOpenTeamSelect,
  onCurrentSeriesSelect,
  onTeamSelect,
  positionsChartsConfig,
  currentSeries,
  positionsHistoryData,
  teams,
  currentTeam,
  openTeamSelect,
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
          // onClick={() => onMenuItemSelect(true)}
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
          {currentTeam}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={teamFormSelectRef.current}
          onClose={() => onMenuItemSelect(false)}
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
          {teams.map((team) => (
            <MenuItem
              key={team.name}
              onClick={() => {
                onTeamSelect(team.name);
                onCurrentSeriesSelect(positionsHistoryData[team.name]);
                // onOpenTeamSelect(false);
                onStateChange({
                  type: 'setOpenTeamSelect',
                  payload: {
                    teamOpen: false
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
                data: currentSeries
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
