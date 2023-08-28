import Chip from '@/components/shared/chip/Chip';
import { IPlayersInfo } from '@/interfaces/IMatch';
import Image from 'next/image';
import { MatchStateOverlay, PlayersSection } from '../style';
import { useRouter } from 'next/navigation';
import * as S from '@/components/shared/table/style';

type PlayersProps = {
  players: {
    all_players: Array<IPlayersInfo>;
    blue: Array<IPlayersInfo>;
    red: Array<IPlayersInfo>;
  };
};

export default function Players({
  players: { all_players, blue, red },
}: PlayersProps) {
  const router = useRouter();
  const handleRouteChange = (player: IPlayersInfo) => {
    router.push(encodeURI(`/eu/${player.name}/${player.tag}`));
  };
  return (
    <>
      {blue.length > 0 && red.length > 0 && (
        <>
          <S.Table>
            <S.THead className="players">
              <tr>
                <th className="team-title blue" colSpan={2}>
                  Team Blue
                  <MatchStateOverlay className="blue" />
                </th>
              </tr>
              <tr>
                <th>Player</th>
                <th>Player agent</th>
              </tr>
            </S.THead>
            <S.TBody className="players">
              {blue.map((player) => (
                <tr
                  key={player.puuid}
                  onClick={() => handleRouteChange(player)}
                >
                  <td className="w-[50%]">
                    <PlayersSection className="justify-start ">
                      <Image
                        src={player.assets.card.small}
                        width={50}
                        height={50}
                        alt="Player card"
                        className="rounded"
                      />
                      <p>
                        {player.name} <Chip>#{player.tag}</Chip>
                      </p>
                    </PlayersSection>
                  </td>
                  <td className="w-[50%]">
                    <PlayersSection className="justify-end">
                      <p>{player.character}</p>
                      <Image
                        src={player.assets.agent.small}
                        width={50}
                        height={50}
                        alt="Player agent"
                      />
                    </PlayersSection>
                  </td>
                </tr>
              ))}
            </S.TBody>
          </S.Table>
          <S.Table>
            <S.THead className="players">
              <tr>
                <th className="team-title red" colSpan={2}>
                  Team Red
                  <MatchStateOverlay className="loss" />
                </th>
              </tr>
              <tr>
                <th>Player</th>
                <th>Player agent</th>
              </tr>
            </S.THead>
            <S.TBody className="players">
              {red.map((player) => (
                <tr
                  key={player.puuid}
                  onClick={() => handleRouteChange(player)}
                >
                  <td className="w-[50%]">
                    <PlayersSection className="justify-start ">
                      <Image
                        src={player.assets.card.small}
                        width={50}
                        height={50}
                        alt="Player card"
                        className="rounded"
                      />
                      <p>
                        {player.name} <Chip>#{player.tag}</Chip>
                      </p>
                    </PlayersSection>
                  </td>
                  <td className="w-[50%]">
                    <PlayersSection className="justify-end">
                      <p>{player.character}</p>
                      <Image
                        src={player.assets.agent.small}
                        width={50}
                        height={50}
                        alt="Player agent"
                      />
                    </PlayersSection>
                  </td>
                </tr>
              ))}
            </S.TBody>
          </S.Table>
        </>
      )}
      {blue.length === 0 && blue.length === 0 && (
        <S.Table>
          <S.THead className="players">
            <tr>
              <th>Player</th>
              <th>Player agent</th>
            </tr>
          </S.THead>
          <S.TBody className="players">
            {all_players.map((player) => (
              <tr key={player.puuid} onClick={() => handleRouteChange(player)}>
                <td className="w-[50%]">
                  <PlayersSection className="justify-start ">
                    <Image
                      src={player.assets.card.small}
                      width={50}
                      height={50}
                      alt="Player card"
                      className="rounded"
                    />
                    <p>
                      {player.name} <Chip>#{player.tag}</Chip>
                    </p>
                  </PlayersSection>
                </td>
                <td className="w-[50%]">
                  <PlayersSection className="justify-end">
                    <p>{player.character}</p>
                    <Image
                      src={player.assets.agent.small}
                      width={50}
                      height={50}
                      alt="Player agent"
                    />
                  </PlayersSection>
                </td>
              </tr>
            ))}
          </S.TBody>
        </S.Table>
      )}
    </>
  );
}
