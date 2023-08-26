'use client';

import { useGetLeaderBoardQuery } from '@/store/services/valorantApi';
import Header from '@/styles/styledComponents/header';
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: 'Valorant ranking',
  description: 'List of best players',
};

export default function Home() {
  const { data } = useGetLeaderBoardQuery(null);
  console.log(data);

  return (
    <>
      <Header>HOLAAA</Header>
    </>
  );
}
