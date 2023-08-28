import IImage from './IImage';

export interface IPlayersInfo {
  assets: {
    card: IImage;
    agent: IImage;
  };
  name: string;
  tag: string;
  puuid: string;
  stats: {
    assists: number;
    bodyshots: number;
    deaths: number;
    headshots: number;
    kills: number;
    legshots: number;
    score: number;
  };
  team: string;
  character: string;
}

interface IRound {
  winning_team: string;
}

interface ITeam {
  has_won: boolean;
  rounds_lost: number;
  rounds_won: number;
}

interface IMatch {
  metadata: {
    cluster: string;
    game_length: number;
    game_start: number;
    game_start_patched: string;
    map: string;
    mode: string;
    rounds_played: 1;
    queue: 'Standard' | 'Deathmatch';
    matchid: string;
  };
  players: {
    all_players: Array<IPlayersInfo>;
    blue: Array<IPlayersInfo>;
    red: Array<IPlayersInfo>;
  };
  rounds: Array<IRound>;
  teams: {
    blue: ITeam;
    red: ITeam;
  };
}

export default IMatch;
