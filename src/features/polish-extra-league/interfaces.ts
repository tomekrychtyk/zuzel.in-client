export interface IStandingsItem {
  place: number;
  name: string;
  matches: number;
  points: number;
  smallPoints: string;
  wins: number;
  draws: number;
  loses: number;
  homeWins: number;
  homeLoses: number;
  awayWins: number;
  awayLoses: number;
  bonuses: number;
  logo: string;
}

interface ITeam {
  id: string;
  name: string;
}

export interface IPositionsHistory {
  [k: string]: number[];
}

export interface IPolishExtraLeagueState {
  standings: IStandingsItem[];
  positionsHistory: IPositionsHistory;
  teams: ITeam[];
}
