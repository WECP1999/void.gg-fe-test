import IPost from '@/interfaces/IPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_POSTS_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], { page: number }>({
      query: ({ page }) => ({
        url: `/posts?limit=5&page=${page}`,
        method: 'GET',
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetPostsQuery } = mockApi;

export default mockApi;
