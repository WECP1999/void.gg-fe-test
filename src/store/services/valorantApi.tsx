import IPlayer, { IPlayerResponse } from '@/interfaces/IPlayer';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const valorantApi = createApi({
  reducerPath: 'valorantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getLeaderBoard: builder.query<IPlayer[], null>({
      query: () => '/valorant/v2/leaderboard/eu',
      transformResponse: (baseQueryReturnValue: IPlayerResponse, meta, arg) =>
        baseQueryReturnValue.players,
      merge: (currentCacheData, responseData, otherArgs) => [
        ...currentCacheData,
        ...responseData,
      ],
    }),
  }),
});

export const { useGetLeaderBoardQuery } = valorantApi;
export default valorantApi;
