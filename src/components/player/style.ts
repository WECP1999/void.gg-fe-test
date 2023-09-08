import { styled } from 'styled-components';
import { Wrapper } from '../containers/layoutContainer';
import tw from 'twin.macro';

export const Container = styled(Wrapper)`
  ${tw`flex-col gap-10 items-start`}
`;

export const MatchesContainer = tw.div`w-full bg-[#18181b] rounded p-4`;
export const Matches = tw.div`w-full flex flex-col gap-8`;

export const PlayersInfoContainer = styled.div`
  ${tw`rounded flex flex-row justify-start items-center gap-4`}

  img {
    ${tw`rounded`}
  }
`;

export const PlayersName = styled.p`
  ${tw`font-bold text-2xl`}

  span {
    ${tw`px-3 py-1`}
    font-size: inherit !important;
  }
`;
