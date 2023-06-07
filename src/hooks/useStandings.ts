import { useEffect, useState } from 'react';
import { ITeam, IPositionsHistory, IStandingsItem } from '@/interfaces';

const useStandings = (
  positionsHistoryData: IPositionsHistory | undefined,
  standingsData: IStandingsItem[] | undefined
) => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [currentTeam, setCurrentTeam] = useState('');
  const [currentSeries, setCurrentSeries] = useState<number[]>([]);

  useEffect(() => {
    if (positionsHistoryData && standingsData) {
      const sortedTeams = [...standingsData]
        .sort((a, b) => (a.place > b.place ? 1 : -1))
        .map((team) => {
          return {
            name: team.name
          };
        });

      setTeams(sortedTeams);
      setCurrentTeam(sortedTeams[0].name);
      setCurrentSeries(positionsHistoryData[sortedTeams[0].name]);
    }
  }, [positionsHistoryData, standingsData]);

  return {
    teams,
    currentTeam,
    setCurrentTeam,
    currentSeries,
    setCurrentSeries
  };
};

export default useStandings;
