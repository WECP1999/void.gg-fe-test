import { styled } from 'styled-components';
import tw from 'twin.macro';

export const MatchHeader = styled.div`
  ${tw`flex flex-row gap-4 w-full justify-between border-t-[1px] border-t-[rgba(244, 244, 245, 0.15)] border-b-[1px] border-b-[rgba(244, 244, 245, 0.15)]`}
  background-position: left center;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05) 0px,
    rgba(255, 255, 255, 0.05) 0px
  );
  background-repeat: no-repeat;
  background-size: 0;
  transition:
    all 0.3s ease-in-out 0s,
    background-position 0s ease 0s;

  &:hover {
    background-size: 100%;
  }
`;

export const MatchWrapper = tw.div`flex flex-col`;

export const LeftContainer = styled.div`
  ${tw`w-full max-w-3xl flex flex-row`}
  & > div {
    ${tw`px-4 py-2 font-bold text-[0.9rem] text-right`}
  }
`;

export const RightContainer = styled.div`
  ${tw`w-full max-w-3xl flex flex-row justify-end`}
  & > div {
    ${tw`px-4 py-2 font-bold text-[0.9rem] text-right`}
  }
`;
export const PlayerCharacter = styled.div`
  ${tw`flex flex-row gap-4 w-full max-w-[18em]`}
  text-align: left !important;
`;

export const PlayerMap = tw.p`text-[0.75rem] opacity-50 text-left`;

export const MatchState = styled.div`
  ${tw`relative text-[1rem] leading-5 font-bold flex items-center w-full max-w-[4rem]`}

  &.victory {
    ${tw`text-[#4caf50]`}
  }

  &.loss {
    ${tw`text-[#ff4655]`}
  }
`;

export const MatchStateOverlay = styled.div`
  ${tw`absolute inset-0 opacity-[0.2]`}
  &.victory {
    background: linear-gradient(
      90deg,
      rgb(132, 204, 22) 0%,
      rgba(132, 204, 22, 0) 100%
    );
  }

  &.blue {
    background: linear-gradient(
      90deg,
      rgb(27, 155, 197) 0%,
      rgba(27, 155, 197, 0) 100%
    );
  }

  &.loss {
    background: linear-gradient(
      90deg,
      rgb(255, 70, 85) 0%,
      rgba(255, 70, 85, 0) 100%
    );
  }
`;

export const MatchTitle = styled.h5`
  ${tw`text-[0.7rem] leading-3 opacity-50`}
`;

export const PlayersContainer = tw.div`flex flex-row gap-9 w-full`;

export const PlayersTitle = tw.p`text-center font-bold text-[1.5rem] py-4`;

export const PlayersSection = tw.div`flex flex-row gap-2 items-center text-left font-bold text-[0.8rem] w-full`;
