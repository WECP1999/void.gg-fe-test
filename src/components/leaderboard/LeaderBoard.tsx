'use client';

import { useRouter } from 'next/navigation';
import * as S from '../shared/table/style';
import IPlayer from '@/interfaces/IPlayer';
import Skeleton from './components/skeleton';
import Chip from '../shared/chip/';

type LeaderBoardProps = {
  data: IPlayer[];
  loading: boolean;
};

export default function LeaderBoard({ data, loading }: LeaderBoardProps) {
  const router = useRouter();
  const handleRouteChange = (player: IPlayer) => {
    if (!player.IsAnonymized) {
      router.push(encodeURI(`/eu/${player.gameName}/${player.tagLine}`));
    }
  };

  return (
    <S.Table>
      <S.THead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Tier/Rating</th>
          <th>Wins</th>
        </tr>
      </S.THead>
      <S.TBody>
        {!loading &&
          data.map((player) => (
            <tr
              className={player.IsAnonymized ? 'anonymized' : ''}
              key={player.leaderboardRank}
              onClick={() => handleRouteChange(player)}
            >
              <td className={`rank-${player.leaderboardRank}`}>
                {player.leaderboardRank}
              </td>
              <td>
                {player.IsAnonymized ? 'Anonymized' : player.gameName}{' '}
                <Chip>
                  <span>#</span>
                  {player.IsAnonymized ? 'Anonymized' : player.tagLine}
                </Chip>
              </td>
              <td>{player.rankedRating}</td>
              <td>{player.numberOfWins}</td>
            </tr>
          ))}
        {loading && (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </S.TBody>
    </S.Table>
  );
}
