import { Wrapper } from '@/components/containers/layoutContainer';

type LeaderBoardMatchProp = {
  params: {
    id: number;
  };
};

export default function LeaderBoardMatch({ params }: LeaderBoardMatchProp) {
  return <Wrapper>{params.id}</Wrapper>;
}
