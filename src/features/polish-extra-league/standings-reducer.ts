import { ITeam } from '@/interfaces';

export type standingsState = {
  openTeamSelect: boolean;
  currentTeam: string;
  currentTeamsSeries: number[];
  teams: ITeam[];
};

export const standingsReducer = (
  state: standingsState,
  action: {
    type: string;
    payload: {
      teamOpen?: boolean;
      teamName?: string;
      currentSeries?: number[];
      teams?: ITeam[];
    };
  }
) => {
  let newState = { ...state };

  switch (action.type) {
    case 'setInitialChartData': {
      newState.currentTeam = action.payload.teamName as string;
      newState.currentTeamsSeries = action.payload.currentSeries as number[];
      newState.teams = action.payload.teams as ITeam[];
      break;
    }
    case 'setOpenTeamSelect': {
      newState.openTeamSelect = action.payload.teamOpen as boolean;
      break;
    }

    case 'setCurrentSeries': {
      newState.currentTeamsSeries = action.payload.currentSeries as number[];
      break;
    }

    case 'teamSelect': {
      newState.openTeamSelect = false;
      newState.currentTeam = action.payload.teamName as string;
      newState.currentTeamsSeries = action.payload.currentSeries as number[];
      break;
    }
  }

  return newState;
};
