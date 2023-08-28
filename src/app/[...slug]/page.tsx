'use client';

import { Wrapper } from '@/components/containers/layoutContainer';
import {
  useGetPlayerMatchesQuery,
  useGetPlayersQuery,
} from '@/store/services/valorantApi';
import Image from 'next/image';
import { TableHeader } from '@/components/shared/title/title';
import Chip from '@/components/shared/chip/Chip';
import MatchTable from '@/components/player/matchTable/MatchTable';
import { SkeletonRow } from '@/components/shared/table/style';
import * as S from '@/components/player/style';

type LeaderBoardMatchProp = {
  params: {
    slug: Array<string>;
  };
};

export default function LeaderBoardMatch({ params }: LeaderBoardMatchProp) {
  const [region, name, tag] = params.slug;

  const decodedName = decodeURI(name);
  const decodedTag = decodeURI(tag);

  const { data, isFetching, isLoading } = useGetPlayerMatchesQuery({
    region: decodeURI(region),
    name: decodedName,
    tag: decodedTag,
  });

  const { data: playersData, isLoading: playerLoading } = useGetPlayersQuery({
    name,
    tag,
  });
  console.log(data);

  if (params.slug.length != 3) return <Wrapper>Error</Wrapper>;

  return (
    <S.Container>
      <S.PlayersInfoContainer>
        {playerLoading && (
          <SkeletonRow className="m-auto" width="2.6em" height="2.6em" />
        )}
        {!playerLoading && playersData && (
          <Image
            src={playersData?.data.card.small}
            width={50}
            height={50}
            alt="Player Image"
          />
        )}
        <S.PlayersName>
          {decodedName} <Chip>#{decodedTag}</Chip>
        </S.PlayersName>
      </S.PlayersInfoContainer>
      <S.MatchesContainer>
        <TableHeader>Recent Matches</TableHeader>
        {isLoading && (
          <>
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
            <br />
            <SkeletonRow width="100%" />
          </>
        )}
        <S.Matches>
          {data?.data.map((match) => (
            <MatchTable
              key={match.metadata.matchid}
              loading={isFetching || isLoading}
              player={playersData?.data}
              match={match}
            />
          ))}
        </S.Matches>
      </S.MatchesContainer>
    </S.Container>
  );
}
