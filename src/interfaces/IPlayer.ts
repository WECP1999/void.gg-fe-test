interface IPlayer {
  PlayerCardID: string;
  TitleID: string;
  IsBanned: boolean;
  IsAnonymized: boolean;
  puuid: string;
  gameName: string;
  tagLine: string;
  leaderboardRank: number;
  rankedRating: number;
  numberOfWins: number;
  competitiveTier: number;
}

export interface IPlayerResponse {
  immortal_1_threshold: number;
  immortal_2_threshold: number;
  immortal_3_threshold: number;
  last_update: number;
  next_update: number;
  radiant_threshold: number;
  total_players: number;
  players: Array<IPlayer>;
}

export default IPlayer;
