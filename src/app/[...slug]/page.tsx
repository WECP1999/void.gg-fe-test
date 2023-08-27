'use client';

import { Wrapper } from '@/components/containers/layoutContainer';

type LeaderBoardMatchProp = {
  params: {
    slug: Array<string>;
  };
};

export default function LeaderBoardMatch({ params }: LeaderBoardMatchProp) {
  return <Wrapper>{decodeURI(params.slug.toString())}</Wrapper>;
}
