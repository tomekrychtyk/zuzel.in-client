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
    };
  }
) => {
  let newState = { ...state };

  switch (action.type) {
    case 'setOpenTeamSelect': {
      console.log('herer');
      newState.openTeamSelect = action.payload.teamOpen as boolean;
      break;
    }
  }

  return newState;
};
