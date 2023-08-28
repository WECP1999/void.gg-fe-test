import IImage from './IImage';

interface IPlayerInfo {
  account_level: number;
  card: IImage;
  name: string;
  region: string;
  tag: string;
  puuid: string;
}

export default IPlayerInfo;
