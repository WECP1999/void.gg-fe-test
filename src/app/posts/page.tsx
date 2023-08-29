'use client';

import { useCallback, useEffect, useState } from 'react';
import { Wrapper } from '@/components/containers/layoutContainer';
import { useGetPostsQuery } from '@/store/services/mockApi';
import Post from '@/components/posts/post/';
import SkeletonPost from '@/components/posts/post/components/skeletonPosts/SkeletonPost';
import Search from '@/components/shared/search/Search';
import { useSearchParams } from 'next/navigation';
import * as St from '@/components/shared/title/title';

export default function Posts() {
  const params = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState(params.get('search') || '');
  const { data, isLoading, isFetching } = useGetPostsQuery({
    page: currentPage,
    searching,
    search,
  });

  const handleScroll = useCallback(() => {
    setSearching(false);
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading ||
      isFetching ||
      !data ||
      data.finish
    ) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  }, [data, isLoading, isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, handleScroll]);

  return (
    <>
      <Wrapper>
        <St.TitleContainer className="justify-between">
          <St.Title>Posts</St.Title>
          <Search
            setSearching={setSearching}
            setSearch={setSearch}
            setPage={setCurrentPage}
          />
        </St.TitleContainer>
      </Wrapper>
      <Wrapper className="gap-4">
        {data && data.result.map((post) => <Post post={post} key={post.id} />)}
        {(isLoading || isFetching) && !data?.finish && <SkeletonPost />}
      </Wrapper>
    </>
  );
}
