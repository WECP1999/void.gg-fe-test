'use client';

import { Wrapper } from '@/components/containers/layoutContainer';

type PostProps = {
  params: {
    id: number;
  };
};

export default function Post({ params }: PostProps) {
  return <Wrapper>{params.id}</Wrapper>;
}
