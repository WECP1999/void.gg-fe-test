import IPlayerInfo from '@/interfaces/IPlayerInfo';
import IMatch from '@/interfaces/IMatch';
import Image from 'next/image';
import calculateTime from '@/utils/functions/calculateTime';
import readableDate from '@/utils/functions/readableDate';
import getKDA from '@/utils/functions/getKDA';
import { useMemo } from 'react';
import * as S from './components/style';
import Players from './components/players/';

type MatchTableProps = {
  loading: boolean;
  player: IPlayerInfo | undefined;
  match: IMatch;
};

export default function MatchTable({
  loading,
  match,
  player,
}: MatchTableProps) {
  const matchPlayerInfo = match.players.all_players.find(
    (p) => p.puuid === player?.puuid
  );

  const matchState = useMemo(() => {
    if (match.metadata.queue === 'Deathmatch') {
      const itsWinner = match.rounds.find(
        (round) => round.winning_team === player?.puuid
      );
      return !!itsWinner ? 'Victory' : 'Loss';
    }
    const team =
      match.teams[matchPlayerInfo?.team.toLocaleLowerCase() as 'blue' | 'red'];

    return team.has_won ? 'Victory' : 'Loss';
  }, [match, player, matchPlayerInfo]);

  return (
    <>
      {matchPlayerInfo && (
        <S.MatchWrapper>
          <S.MatchHeader>
            <S.LeftContainer>
              <S.MatchState className={matchState.toLocaleLowerCase()}>
                <S.MatchStateOverlay
                  className={matchState.toLocaleLowerCase()}
                />
                {matchState}
              </S.MatchState>
              <S.PlayerCharacter>
                <div>
                  <Image
                    src={matchPlayerInfo?.assets.agent.small}
                    alt="Players agent"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <S.PlayerMap>{match.metadata.map}</S.PlayerMap>
                  <div>{matchPlayerInfo.character}</div>
                </div>
              </S.PlayerCharacter>
            </S.LeftContainer>
            <S.RightContainer>
              <div>
                <S.MatchTitle>Match duration</S.MatchTitle>
                <div>{calculateTime(match.metadata.game_length)}</div>
              </div>
              <div>
                <S.MatchTitle>Match day</S.MatchTitle>
                <div>{readableDate(match.metadata.game_start_patched)}</div>
              </div>
              <div>
                <S.MatchTitle>
                  K/D/A . {matchPlayerInfo.stats.kills}/
                  {matchPlayerInfo.stats.deaths}/{matchPlayerInfo.stats.assists}
                </S.MatchTitle>
                <div>
                  {getKDA(
                    matchPlayerInfo.stats.kills,
                    matchPlayerInfo.stats.deaths,
                    matchPlayerInfo.stats.assists
                  )}
                </div>
              </div>
            </S.RightContainer>
          </S.MatchHeader>
          <S.PlayersTitle>
            Players in the match - {match.metadata.mode}
          </S.PlayersTitle>
          <S.PlayersContainer>
            <Players players={match.players} />
          </S.PlayersContainer>
        </S.MatchWrapper>
      )}
    </>
  );
}
