import IPost from '@/interfaces/IPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type GetPostsProps = {
  page: number;
  searching: boolean;
  search?: string;
};

type GetPostsResponse = {
  finish: boolean;
  result: IPost[];
};

const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_POSTS_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, GetPostsProps>({
      query: ({ page, search = '' }) => ({
        url: `/posts?limit=5&page=${page}&search=${search}`,
        method: 'GET',
      }),
      transformResponse: (baseQueryReturnValue: IPost[], meta, arg) => {
        return {
          finish: false,
          result: baseQueryReturnValue,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, args) => {
        if (!args.arg.searching) {
          currentCache.result.push(...newItems.result);
          currentCache.finish = newItems.result.length === 0;
        } else {
          return newItems;
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.page !== previousArg?.page ||
          currentArg?.search !== previousArg?.search
        );
      },
    }),
  }),
});

export const { useGetPostsQuery } = mockApi;

export default mockApi;
