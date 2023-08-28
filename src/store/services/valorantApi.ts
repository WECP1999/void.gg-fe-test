import IMatch from '@/interfaces/IMatch';
import IPlayer, { IPlayerResponse } from '@/interfaces/IPlayer';
import IPlayerInfo from '@/interfaces/IPlayerInfo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type GetPlayerProps = {
  region?: string;
  name: string;
  tag: string;
};

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
    getPlayerMatches: builder.query<ValorantResponse<IMatch[]>, GetPlayerProps>(
      {
        query: ({ region, name, tag }) =>
          `/valorant/v3/matches/${region}/${name}/${tag}`,
      }
    ),
    getPlayers: builder.query<ValorantResponse<IPlayerInfo>, GetPlayerProps>({
      query: ({ name, tag }) => `/valorant/v1/account/${name}/${tag}`,
    }),
  }),
});

export const {
  useGetLeaderBoardQuery,
  useGetPlayerMatchesQuery,
  useGetPlayersQuery,
} = valorantApi;
export default valorantApi;
