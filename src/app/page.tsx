'use client';

import { useCallback, useEffect, useState } from 'react';
import { Wrapper } from '@/components/containers/layoutContainer';
import { useGetLeaderBoardQuery } from '@/store/services/valorantApi';
import { Metadata } from 'next';
import useAppDispatch from '@/hooks/useAppDispatch';
import { addPlayers, reset, setLoading } from '@/store/features/auxValorant';
import useAppSelector from '@/hooks/useAppSelector';
import LeaderBoard from '@/components/leaderboard/LeaderBoard';
import ValorantLogo from '../../public/logos/valorant-logo.svg';
import * as St from '@/components/shared/title/leaderBoardTitle';

export const metaData: Metadata = {
  title: 'Valorant ranking',
  description: 'List of best players',
};

export default function Home() {
  const { data, isLoading, isFetching } = useGetLeaderBoardQuery(null);

  const [currentPage, setCurrentPage] = useState(1);
  const players = useAppSelector(
    (state) => state.valorantPlayersReducer.players
  );
  const internalLoading = useAppSelector(
    (state) => state.valorantPlayersReducer.loading
  );
  const dispatch = useAppDispatch();

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading ||
      isFetching ||
      !data
    ) {
      return;
    }
    dispatch(setLoading(true));
    dispatch(
      addPlayers(data?.slice(currentPage * 1000, (currentPage + 1) * 1000))
    );
    dispatch(setLoading(false));
    setCurrentPage((prev) => prev + 1);
  }, [currentPage, data, isLoading, isFetching, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, internalLoading, handleScroll]);

  useEffect(() => {
    dispatch(setLoading(true));
    if (data && !isFetching && !isLoading) {
      dispatch(reset());
      dispatch(addPlayers(data?.slice(0, 1000)));
      dispatch(setLoading(false));
    }
  }, [data, dispatch, isFetching, isLoading]);

  return (
    <Wrapper>
      <St.LeaderBoardTitleContainer>
        <ValorantLogo fill="#ff4655" width="200" height="200" />
        <St.Title>alorant</St.Title>
      </St.LeaderBoardTitleContainer>
      <St.Subtitle>Leaderboards</St.Subtitle>
      <LeaderBoard data={players} loading={isLoading || internalLoading} />
    </Wrapper>
  );
}
