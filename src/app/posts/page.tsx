'use client';

import { useCallback, useEffect, useState } from 'react';
import { Wrapper } from '@/components/containers/layoutContainer';
import { useGetPostsQuery } from '@/store/services/mockApi';
import * as St from '@/components/shared/title/title';
import Post from '@/components/posts/post/';
import SkeletonPost from '@/components/posts/post/components/skeletonPosts/SkeletonPost';

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching } = useGetPostsQuery({
    page: currentPage,
  });

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
    setCurrentPage((prev) => prev + 1);
  }, [data, isLoading, isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, handleScroll]);

  return (
    <>
      <Wrapper>
        <St.TitleContainer>
          <St.Title>Posts</St.Title>
        </St.TitleContainer>
      </Wrapper>
      <Wrapper className="gap-4">
        {data && data.map((post) => <Post post={post} key={post.id} />)}
        {(isLoading || isFetching) && <SkeletonPost />}
      </Wrapper>
    </>
  );
}
