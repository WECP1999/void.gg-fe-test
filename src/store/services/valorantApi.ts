import IPlayer, { IPlayerResponse } from '@/interfaces/IPlayer';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const valorantApi = createApi({
  reducerPath: 'valorantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getLeaderBoard: builder.query<IPlayer[], null>({
      query: () => '/valorant/v2/leaderboard/eu?start=10000',
      transformResponse: (baseQueryReturnValue: IPlayerResponse, meta, arg) =>
        baseQueryReturnValue.players.sort((curr, prev) =>
          prev.leaderboardRank > curr.leaderboardRank ? -1 : 1
        ),
    }),
  }),
});

export const { useGetLeaderBoardQuery } = valorantApi;
export default valorantApi;
