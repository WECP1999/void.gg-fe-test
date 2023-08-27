'use client';

import { useCallback, useEffect, useState } from 'react';
import { Wrapper } from '@/components/containers/layoutContainer';
import { useGetLeaderBoardQuery } from '@/store/services/valorantApi';
import { Metadata } from 'next';
import useAppDispatch from '@/hooks/useAppDispatch';
import { addPlayers, reset, setLoading } from '@/store/features/auxValorant';
import useAppSelector from '@/hooks/useAppSelector';

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
    if (data && !isFetching) {
      dispatch(setLoading(true));
      dispatch(reset());
      dispatch(addPlayers(data?.slice(0, 1000)));
      dispatch(setLoading(false));
    }
  }, [data, dispatch, isFetching]);

  return (
    <Wrapper>
      <ul>
        {!isLoading &&
          !isFetching &&
          players.map((player) => (
            <li key={player.leaderboardRank}>{player.tagLine}</li>
          ))}
      </ul>
      {(isLoading || internalLoading) && <p>Loading...</p>}
    </Wrapper>
  );
}
